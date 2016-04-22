import React from "react";
import cx from "classnames"
import { findDOMNode } from 'react-dom'

export default React.createClass({
    propTypes: {
        href: React.PropTypes.string,
        style: React.PropTypes.object
    },
    render: function() {
        var classes = cx({
            'toolbarItem': true
        })
        var match = /\/report\/(.*?)\/html/.exec(this.props.href)
        if(match) var reportId = match[1] + ".html"
        //var reportId = "xxx"
        var style = {
            position:'fixed',
            right:'4.5rem'
        }
        return (
            <li ref='li' {...this.props} className={classes}><a href={this.props.href} download={reportId}><button><i className='icon icon-download'></i></button></a></li>
        );
    },
});
