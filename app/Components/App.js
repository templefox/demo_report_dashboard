import React from "react";
import cx from "classnames"
import Toolbar from './toolbar'
import Sidebar from './sidebar'
import Content from './content'

export default React.createClass({  	
	getInitialState: function() {
  		return {
  			isLoading:true,
  			width:0,
  			height:0,
        src:"http://localhost:8080/app/test.html",
  		};
  	},
  	render: function() {
  		return(
        <div>   
          <Sidebar/>
          <Toolbar/>
          <Content />
        </div>
      )
    },
});