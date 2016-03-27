import React from "react";
import { findDOMNode } from 'react-dom'
import cx from "classnames"

export default React.createClass({
  propTypes:{
      name:React.PropTypes.string
  }, 
  render: function() {
    var iconStyle ={
      margin:'0.5rem',
    }

    var textBlockStyle ={
      display:'inline-block',
      fontSize:'large'
    }

    return (
      <div className='tanent'>
        <i style={iconStyle} className='icon icon-user' />
        <div style={textBlockStyle}>
          <b>{this.props.name}</b>
        </div>
      </div>
    );
  },
});