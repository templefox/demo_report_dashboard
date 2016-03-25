import React from "react";
import cx from "classnames"
import Toolbar from './toolbar'
import Sidebar from './sidebar'
import Content from './content'

export default React.createClass({  	
	getInitialState: function() {
      var search = window.location.search
      var id = search?search.substring(1):window.location.hash.substring(1).replace(/"|\\/g,"")
      var src = "../report/" + id + "/html";
      return {
        src: src,
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
        <div className="container">   
          <div className="left_block">
          <Sidebar report={this.state.report_id}/>
          </div>
          <div className="right_block">
            <Toolbar/>
            <Content src={this.state.src} />
          </div>
        </div>
      )
    },
    onHashChange:function(e) {
      var index = e.newURL.indexOf('#')
      var rid = e.newURL.substring(index+1)
      var src = "../report/" + rid + "/html";
      this.setState({
        src: src,
        report_id:rid,
      })
    }
});