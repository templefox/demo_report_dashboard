import React from "react";
import TreeNode from "./treeNode"

export default React.createClass({
	propTypes:{
    	report:React.PropTypes.string
  	}, 
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
	var node = <TreeNode indent={15} obj={nodeObj} report={this.props.report} visible={true}/>

    return (
		<nav className="sidebar-left">
		  <div style={{'display':'inline-block','min-width':'100%'}}>
		  	{node}
		  </div>
		</nav>
	);
  },
});