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
        try{
            var h = this.innerIframe().contentWindow.document.body.getElementsByTagName('table')[0].scrollHeight
            var w = this.innerIframe().contentWindow.document.body.getElementsByTagName('table')[0].scrollWidth
            console.log(w)
            this.setState({
                isLoading: false,
                width: w + 50,
                height: h + 50,
            });
        }catch(err){
            //
        }
    },
    refresh:function() {
      var frame = findDOMNode(this.refs.frame)
      //refresh
      frame.src = frame.src
    }
});
