import React from "react";
import { findDOMNode } from 'react-dom'
import ReportCategory from './sidebar/category'
import Tanent from './sidebar/tanent'

export default React.createClass({
  propTypes:{
  	selected_report: React.PropTypes.string.isRequired,
  },
  render: function() {
    var style={
      width:'inherit',
      overflow:'hidden',
    }
    return (
      <div style={style}>
        <Tanent name="xxx"/>
        <ReportCategory {...this.props}/>
      </div>
    );
  },
});