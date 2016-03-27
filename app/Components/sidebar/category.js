import React from "react";
import TreeNode from "./treeNode"
import request from 'superagent'

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
                this.setState({
                    repository: JSON.parse(res.text)
                })
            })
    },
    render: function() {
        var nodeObj = this.state.repository ? this.state.repository[0] : {}
        var key = "category_id_" + nodeObj.category_id

        var props = {
            key: key,
            indent: 15,
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
