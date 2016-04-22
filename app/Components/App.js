import React from "react";
import cx from "classnames"
import Toolbar from './toolbar/toolbar'
import Sidebar from './sidebar'
import Content from './content'
import { findDOMNode } from 'react-dom'
import { easingTypes, stackBehavior, Mixin } from 'react-tween-state'

export default React.createClass({
    mixins: [Mixin],
    first_time: true,
    getInitialState: function() {
        var search = window.location.search
        var id = search ? search.substring(1) : window.location.hash.substring(1).replace(/"|\\/g, "")
        id = id.replace(/=$/,"")
        var src = "../report/" + id + "/html";
        //var src = "/app/test.html"
        return {
            src: id?src:"",
            report_id: id,
            width: '0',
        };
    },
    componentDidMount: function() {
        if (window.addEventListener) {
            window.addEventListener('hashchange', this.onHashChange, false);
        }
        //it's a walkaround of animation
        this.tweenState('width', {
            easing: easingTypes.easeInOutQuad,
            duration: 1,
            endValue: 0,
        });
    },
    render: function() {
        let width = this.getTweeningValue('width')
        var left_block_width = { width: width + 'px' } //{width:this.state.width}
         return (
            <div id="container">   
              <div style={left_block_width} className="left_block">
                <Sidebar ref='sidebar' selected_report={this.state.report_id}/>
              </div>
              <div className="right_block">
                <tr>
                  <td>
                    <Toolbar width={width} hideSidebar={this.onHideSidebar} refresh={this.onRefreshIframe} src={this.state.src}/>
                  </td>
                </tr>
                <tr>
                  <td>  
                    <Content ref='content' src={this.state.src} />
                  </td>
                </tr>
              </div>
            </div>
        )
    },
    onHashChange: function(e) {
        var index = e.newURL.indexOf('#')
        var rid = e.newURL.substring(index + 1)
        var src = "../report/" + rid + "/html";
        //var src = "/app/test.html"
        this.setState({
            src: rid?src:"",
            report_id: rid,
        })
    },
    onHideSidebar: function() {
        this.tweenState('width', {
            easing: easingTypes.easeInOutQuad,
            startValue: this.state.width === 0 ? 0 : 350,
            duration: 250,
            endValue: this.state.width === 0 ? 350 : 0,
        });
    },
    onRefreshIframe:function() {
      this.refs.content.refresh()
    }
});
