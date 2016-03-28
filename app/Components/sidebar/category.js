import React from "react";
import TreeNode from "./treeNode"
import request from 'superagent'
import values from '../values'

export default React.createClass({
    propTypes: {
        selected_report: React.PropTypes.string
    },
    getInitialState: function() {
        return {
            repository: null,
        };
    },
    componentDidMount: function() {
        var category;
        //request.get('../repository')
        request.get('/app/test.json')
            .withCredentials()
            .end((err, res) => {
                let repo = JSON.parse(res.text)
                repo[0].category_name = values.root_name
                console.log(repo)
                this.setState({
                    repository: repo
                })
            })
    },
    render: function() {
        var nodeObj = this.state.repository ? this.state.repository[0] : {}
        var key = "category_id_" + nodeObj.category_id

        var props = {
            key: key,
            indent: values.tree_indent,
            obj: nodeObj,
            visible: true,
        }
        var node = <TreeNode {...this.props} {...props}/>

        return (
            <nav className="excel_category">
			  <div style={{'display':'inline-block','minWidth':'100%'}}>
			  	{node}
			  </div>
			</nav>
        );
    },
});
