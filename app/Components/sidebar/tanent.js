import React from "react";
import { findDOMNode } from 'react-dom'

export default React.createClass({
  propTypes:{
      name:React.PropTypes.string
  }, 
  render: function() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  },
});