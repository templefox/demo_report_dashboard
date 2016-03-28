import React from "react";
import { findDOMNode } from 'react-dom'
import Leaf from './leafItem'
import cx from "classnames"
import values from '../values'
import {easingTypes, stackBehavior, Mixin} from 'react-tween-state'


const TreeNode = React.createClass({
    mixins: [Mixin],
    propTypes: {
        obj: React.PropTypes.object.isRequired,
        indent: React.PropTypes.number.isRequired,
        visible: React.PropTypes.bool,
        selected_report: React.PropTypes.string,
    },

    getInitialState: function() {
        return {
            visible: this.props.visible,
            height: -1,
        };
    },

    componentDidMount: function() {
        //this.refs.iframe.getDOMNode().addEventListener('load', this.props.onLoad);
        findDOMNode(this.refs['category_li']).addEventListener('click', this.onClickHandler);
    },
    render: function() {
        var sub_categories = this.props.obj.sub_categories
        var reports = this.props.obj.reports
        var indent = this.props.indent + values.tree_indent;
        var selected_report = this.props.selected_report
        var that = this
        if (reports) {
            var subReports = reports.map(
                function(r) {
                    var key = that.props.key + "_report_id_" + r.report_id
                    return (
                        <Leaf key={key} obj={r} selected_report={selected_report}/>
                    )
                }
            )
        }
        if (sub_categories) {
            var subcates = sub_categories.map(
                function(cate) {
                    var contains = that.containsReport(cate, selected_report)
                    var key = that.props.key + "_category_id" + cate.category_id
                    return (
                        <TreeNode selected_report={selected_report} key={key} indent={indent} obj={cate} visible={contains} />
                    )
                }
            )
        }

        if (subcates || subReports) {
            var subNodes = [...subReports, ...subcates]
        }


        let height = this.state.height === -1?
            (this.state.visible?"auto":0)
            :this.getTweeningValue('height');
        var style = {
            'textIndent': this.props.indent,
            'height': height
        }

        var li_class = cx({
            'disabled': subNodes && subNodes.length === 0,
            'directory': true,
        })
        
        let isRoot = this.props.obj.category_name===values.root_name
        var icon = cx({
            'icon icon-folder': !isRoot&&!this.state.visible,
            'icon icon-folder-open': !isRoot&&this.state.visible,
            'icon icon-paper': isRoot
        })

        return (
            <div>
                <li ref="category_li" className={li_class}><nobr><i className={icon}></i> {this.props.obj.category_name} </nobr></li>
                <ul key={this.props.key} ref="report_list_ul" style={style}>
                  {subNodes}
                </ul>
            </div>
        )
    },
    onClickHandler: function(e) {
        var height = findDOMNode(this.refs['report_list_ul']).scrollHeight
        var that = this
        that.state.visible = !this.state.visible;

        var onEnd = function() {
            that.setState({height:"auto"})
        }

        that.tweenState('height', {
          easing: easingTypes.easeInOutQuad,
          stackBehavior: stackBehavior.ADDITIVE,
          beginValue: that.state.visible?0:height,
          duration: 250,
          endValue: that.state.visible?height:0,
          onEnd: that.state.visible?onEnd:undefined,
        });
    },

    containsReport: function(json, report_id) {
        var that = this
        if (!json.reports) return false
        return json.reports.some(function(report) {
            return report.report_id === report_id
        }) || json.sub_categories.some(function(cate) {
            return that.containsReport(cate, report_id)
        })
    },
});

export default TreeNode
