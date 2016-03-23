import React from "react";
import cx from "classnames"
import { findDOMNode } from 'react-dom'

export default React.createClass({
	propTypes:{
  		right: React.PropTypes.bool,
      onClick: React.PropTypes.func
  	},
  componentDidMount: function() {
    //this.refs.iframe.getDOMNode().addEventListener('load', this.props.onLoad);
    findDOMNode(this.refs.li).addEventListener('onClick', this.props.onClick);
  },
  render: function() {
  		var classes = cx({
  			'right':this.props.right,
  			'toolbarItem':true
  		})
    return (
		<li ref='li' className={classes}><a>{this.props.children}</a></li>
	);
  },
});