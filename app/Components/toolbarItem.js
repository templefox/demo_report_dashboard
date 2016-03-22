import React from "react";
import cx from "classnames"

export default React.createClass({
	propTypes:{
  		right: React.PropTypes.bool,
  	},
  render: function() {
  		var classes = cx({
  			'right':this.props.right,
  			'toolbarItem':true
  		})
    return (
		<li className={classes}><a>{this.props.children}</a></li>
	);
  },
});