import React from "react";
import cx from "classnames"
import { findDOMNode } from 'react-dom'

export default React.createClass({
    propTypes: {
        onClick: React.PropTypes.func,
        style: React.PropTypes.object
    },
    render: function() {
        var classes = cx({
            'toolbarItem': true
        })

        var style = {
            position:'fixed',
            right:'2rem'
        }
        return (
            <li ref='li' {...this.props} className={classes}><a><button><i className='icon icon-refresh'></i></button></a></li>
        );
    },
});
