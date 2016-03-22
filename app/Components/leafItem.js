import React from "react";
import { findDOMNode } from 'react-dom'

export default React.createClass({  
  propTypes:{
    obj: React.PropTypes.object.isRequired,
  },
  componentDidMount: function() {
    //this.refs.iframe.getDOMNode().addEventListener('load', this.props.onLoad);
    //findDOMNode(this).addEventListener('onClick', this.props.onClick);
  },
  render: function() {
    return (
      <li><a href={"#"+this.props.obj.report_id}> {this.props.obj.title}</a></li>
    );
  },
});