import React from "react";
import TreeNode from "./treeNode"
import request from 'superagent'

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
		//request.get('../repository')
		request.get('/app/test.json')
			.withCredentials()
			.end((err,res)=>{
				this.setState({
					repository:JSON.parse(res.text)
				})
			})
	},
  render: function() {
   	console.log(this.state.repository)

   	var nodeObj = this.state.repository?this.state.repository[0]:{}
   	var key = "category_id" + nodeObj.category_id
	var node = <TreeNode key={key} indent={15} obj={nodeObj} report={this.props.report} visible={true}/>
  

    return (
		<nav className="excel_category">
		  <div style={{'display':'inline-block','min-width':'100%'}}>
		  	{node}
		  </div>
		</nav>
	);
  },
});