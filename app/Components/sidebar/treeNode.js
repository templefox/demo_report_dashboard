import React from "react";
import { findDOMNode } from 'react-dom'
import Leaf from './leafItem'
import cx from "classnames"
import values from '../values'

const TreeNode = React.createClass({  
  
  containsReport: function(json,report_id) {
      var that = this
      if(!json.reports) return false
      return json.reports.some(function(report) {
        return report.report_id === report_id
      })|| json.sub_categories.some(function(cate) {
        return that.containsReport(cate,report_id)
      })

  }
  ,
  propTypes:{
    obj:React.PropTypes.object.isRequired,
    visible:React.PropTypes.bool,
    indent:React.PropTypes.string,
    report:React.PropTypes.string
  },  
  getInitialState: function() {
      return {
        visible:this.props.visible,
      };
  },

  componentDidMount: function() {
    //this.refs.iframe.getDOMNode().addEventListener('load', this.props.onLoad);
    findDOMNode(this.refs['category_li']).addEventListener('click', this.onClickHandler);
  },
  render: function() {
    var sub_categories = this.props.obj.sub_categories
    var reports = this.props.obj.reports
    var indent = this.props.indent +15;
    var report = this.props.report
    var that = this
    if(reports){
      var subReports = reports.map(
        function(r) {
          var key = that.key + "-report_id" + r.report_id
          return(
            <Leaf key={key} obj={r} current={report}/>
            )
        }
      )
    }
    if(sub_categories){
      var subcates = sub_categories.map(
        function(cate) {
          var contains = that.containsReport(cate,report)
          var key = that.key + "-category_id" + cate.category_id
          return(
            <TreeNode key={key} indent={indent} obj={cate} visible={contains} report={report} />
            )
        }
      )
    }

    let all_height = 0;
    if(subcates || subReports)
    {  
      var subNodes = [...subReports,...subcates]
      if(this.state.visible)
        all_height = subcates.length * values.directory_height + subReports.length * values.leaf_height
    }

    var style = {
      'text-indent':this.props.indent,
      'height':all_height,
    }

    var li_class = cx(
    {
      'disabled': subNodes && subNodes.length === 0,
      'directory':true,
    })

    return(
        <div>
          <li ref="category_li" className={li_class}><button disabled className='d' onClick={this.onClickHandler} ><nobr> {this.props.obj.category_name} </nobr></button> </li>
            <ul key={this.props.key} style={style} className="category-transition">
              {subNodes}
            </ul>
        </div>
      )
  },
  onClickHandler:function(e) {
    this.setState({
      visible:!this.state.visible
    })
  }
});

export default TreeNode