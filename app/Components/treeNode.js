import React from "react";
import { findDOMNode } from 'react-dom'
import Leaf from './leafItem'
import cx from "classnames"

const TreeNode = React.createClass({  
  propTypes:{
    obj:React.PropTypes.object.isRequired,
    visible:React.PropTypes.bool,
    indent:React.PropTypes.string
  },  
  getInitialState: function() {
      return {
        visible:this.props.visible&&true,
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
    if(reports){
      var subReports = reports.map(
        function(report) {
          return(
            <Leaf obj={report} />
            )
        }
      )
    }
    if(sub_categories){
      var subcates = sub_categories.map(
        function(cate) {
          return(
            <TreeNode indent={indent} obj={cate} />
            )
        }
      )
    }

    if(subcates || subReports)
      var subNodes = [...subReports,...subcates]


    var classes = cx({
        'invisible':!this.state.visible,
    })

    var li_class = cx(
    {
      'disabled': subNodes && subNodes.length === 0,
      'directory':true,
    })

    return(
        <div>
          <li ref="category_li" className={li_class}><button disabled className='d' onClick={this.onClickHandler} ><nobr> {this.props.obj.category_name} </nobr></button> </li>
          <ul style={{'text-indent':this.props.indent}} className={classes}>
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