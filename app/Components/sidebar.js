import React from "react";
import TreeNode from "./treeNode"

export default React.createClass({
	getInitialState: function() {
    	return {
			repository:null,
			currentCateId:0,
			currentReportId:null,
	    };
	},
	componentDidMount:function() {
		var category;
		fetch('/app/test.json')
			.then((response)=> response.text())
			.then((responseText)=>{
				this.setState({
							repository:JSON.parse(responseText)
				})
			})
	},
  render: function() {
   	console.log(this.state.repository)

   	var nodeObj = this.state.repository?this.state.repository[0]:{}	

	var node = <TreeNode obj={nodeObj} name="222" onClick={this.handleOnClick} />

    return (
		<nav className="sidebar-left">
		  <div className="container">
		  	{node}
		  </div>
		</nav>
	);
  },

  handleOnClick: function(e){
  	alert("a")
  }
});