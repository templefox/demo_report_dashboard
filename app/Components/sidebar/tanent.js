import React from "react";
import { findDOMNode } from 'react-dom'
import cx from "classnames"
import request from 'superagent'

export default React.createClass({
  propTypes:{
      name:React.PropTypes.string
  },     

  getInitialState: function() {
        return {
            username: this.props.name,
        };
    },

  componentDidMount: function() {
        var category;
        request.get('../../user-context')
        //request.get('/app/test.json')
            .withCredentials()
            .end((err, res) => {
                let context = JSON.parse(res.text)
                let username = context.userName +'@'+context.company
                this.setState({
                    username: username
                })
            })
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
          <b><nobr>{this.state.username}</nobr></b>
        </div>
      </div>
    );
  },
});