import React from "react";
import Item from "./toolbarItem"

export default React.createClass({
  render: function() {
    return (
			<ul className="toolbar">
			  	<Item right={true}>Popup</Item>
				<Item onClick={this.onClickHandler} right={true}>Refresh</Item>
			</ul>
	);
  },
  onClickHandler:function(e) {
  	alert(e)
  }
});