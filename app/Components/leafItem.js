import React from "react";
import { findDOMNode } from 'react-dom'

export default React.createClass({  
  propTypes:{
    name: React.PropTypes.string.isRequired,
    onClick:React.PropTypes.func,
  },
  componentDidMount: function() {
    //this.refs.iframe.getDOMNode().addEventListener('load', this.props.onLoad);
    findDOMNode(this).addEventListener('onClick', this.props.onClick);
  },
  render: function() {
    return (
      <button {...this.props} > {this.props.name} </button>
    );
  },
});