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

        var reportId = /\/report\/(.*?)\/html/.exec(this.props.href)[1] + ".html"
        
        var style = {
            position:'fixed',
            right:'4.5rem'
        }
        return (
            <li ref='li' {...this.props} className={classes}><a href={this.props.href} download={reportId}><button><i className='icon icon-download'></i></button></a></li>
        );
    },
});
