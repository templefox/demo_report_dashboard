import React from "react";
import { findDOMNode } from 'react-dom'
import Leaf from './leafItem'

const TreeNode = React.createClass({  
  propTypes:{
    name:React.PropTypes.string.isRequired,
    onClick:React.PropTypes.func,
    obj:React.PropTypes.object.isRequired,
  },

  componentDidMount: function() {
    //this.refs.iframe.getDOMNode().addEventListener('load', this.props.onLoad);
    //findDOMNode(this.refs.btn_report).addEventListener('onClick', this.props.onClick);
  },
  render: function() {
    var sub_categories = this.props.obj.sub_categories
    var reports = this.props.obj.reports
    var clickHandler = this.props.onClick
  
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
            <TreeNode name="xxx" obj={cate} />
            )
        }
      )
    }

    if(subcates || subReports)
      var subNodes = [...subReports,...subcates]

    return(
        <div>
          <li><p {...this.props} > {this.props.obj.category_name} </p> </li>
          <ul>
            {subNodes}
          </ul>
        </div>
      )
  },
});

export default TreeNode