import React from "react";
import cx from "classnames"
import Toolbar from './toolbar'
import Sidebar from './sidebar'
import Content from './content'

export default React.createClass({  	
	getInitialState: function() {
      var id = window.location.hash.substring(1).replace(/"|\\/g,"")
  		return {
        src:"http://localhost:8080/app/test.html?" +id,
        report_id:id,
  		};
  	},
    componentDidMount: function() {    
      if (window.addEventListener) {
        window.addEventListener('hashchange', this.onHashChange, false);
      }
    },
  	render: function() {
  		return(
        <div>   
          <Sidebar report={this.state.report_id}/>
          <Toolbar/>
          <Content src={this.state.src} />
        </div>
      )
    },
    onHashChange:function(e) {
      var index = e.newURL.indexOf('#')
      var rid = e.newURL.substring(index+1)
      this.setState({
        src:"http://localhost:8080/app/test.html?" + rid,
        report_id:rid,
      })
    }
});