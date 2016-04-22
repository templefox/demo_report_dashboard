import React from "react";
import { findDOMNode } from 'react-dom'

export default React.createClass({
  render: function() {
  	var component = undefined
  	if(this.props.haveSrc){
  		component = <p>Loading...</p>
  	}else{
  		component = <p>Please select a report</p>
  	}

    return (
      <div>
      	{component}
      </div>
    );
  },
});