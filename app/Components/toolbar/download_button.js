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
        return (
            <li ref='li' {...this.props} className={classes}><button><i className='icon icon-download'></i></button></li>
        );
    },
});
