import React from "react";
import Leaf from "./leafItem"

export default React.createClass({
  render: function() {
    return (
		<nav className="sidebar-left">
		  <div className="container">
		    <Leaf name="1za" onClick={this.handleOnClick}>Refresh</Leaf>
		  </div>
		</nav>
	);
  },

  handleOnClick: function(e){
  	alert("a")
  }
});