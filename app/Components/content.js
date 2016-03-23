import React from "react";
import Frame from "./frame"
import cx from "classnames"

export default React.createClass({  	
	getInitialState: function() {
  		return {
  			isLoading:true,
  			width:0,
  			height:0,
        src:"http://localhost:8080/app/test.html"
  		};
  	},
    componentDidMount: function() {    
      if (window.addEventListener) {
        window.addEventListener('hashchange', this.onHashChange, false);
      }
    },
  	innerIframe() {
        return this.refs.frame.refs.iframe
    },
  	render: function() {
  		var classes = cx({
  			'is-loading':this.state.isLoading,
  			'main-content':true
  		})

  		var style = {
  			width:this.state.width,
  			height:this.state.height
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
	      width:w,
	      height:h,
	    });
  	},  
    onHashChange:function(e) {
      console.log(e)
      var index = e.newURL.indexOf('#')
      var src = e.newURL.substring(index+1)
      console.log(src)
      this.setState({
        src:"http://localhost:8080/app/test.html?" + src
      })
    }
});