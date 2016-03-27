import React from "react";
import Frame from "./frame"
import cx from "classnames"
import { findDOMNode } from 'react-dom'

export default React.createClass({
    getInitialState: function() {
        return {
            isLoading: true,
            width: 0,
            height: 0
        };
    },
    innerIframe() {
        return this.refs.frame.refs.iframe
    },
    render: function() {
        var classes = cx({
            'is-loading': this.state.isLoading,
            'main-content': true
        })

        var style = {
            width: this.state.width,
            height: this.state.height
        }

        return (
            <Frame ref="frame" className={classes} style={style} onLoad={this._iframeLoaded} src={this.props.src}/>
        );
    },
    _iframeLoaded: function() {
        var h = this.innerIframe().contentWindow.document.body.scrollHeight
        var w = this.innerIframe().contentWindow.document.body.scrollWidth

        this.setState({
            isLoading: false,
            width: w,
            height: h,
        });
    },
    refresh:function() {
      var frame = findDOMNode(this.refs.frame)
      //refresh
      frame.src = frame.src
    }
});
