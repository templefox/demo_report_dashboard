import React from "react";
import { findDOMNode } from 'react-dom'
import ReportCategory from './sidebar/sidebar'
import Tanent from './sidebar/tanent'

export default React.createClass({
  propTypes:{
  	report: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      <div>
        <Tanent name="xxx"/>
        <ReportCategory report={this.props.report}/>
      </div>
    );
  },
});