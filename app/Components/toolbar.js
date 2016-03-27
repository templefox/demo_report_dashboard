import React from "react";
import Item from "./toolbarItem"

export default React.createClass({  
  render: function() {
    return (
			<ul className="toolbar">
			  	<Item onClick={this.props.hideSidebar} right={true}>Popup</Item>
				  <Item onClick={this.onClickHandler} right={true}>Refresh</Item>
			</ul>
	);
  },
  onClickHandler:function(e) {
  	alert(e)
  }
});