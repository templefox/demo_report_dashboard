import React from "react";
import { findDOMNode } from 'react-dom'

export default React.createClass({
  propTypes:{
  	src: React.PropTypes.string.isRequired,
  	onLoad:React.PropTypes.func,
  },
  componentDidMount: function() {
    findDOMNode(this.refs.iframe).addEventListener('load', this.props.onLoad);
  },
  render: function() {
    return (
    	<iframe ref="iframe" {...this.props} ></iframe>
    );
  },
});