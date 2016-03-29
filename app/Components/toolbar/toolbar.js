import React from "react";
import Item from "./toolbarItem"
import List from "./list_button"
import Refresh from "./refresh_button"
import Download from "./download_button"

export default React.createClass({
    offset:0,
    getInitialState: function() {
        return {
            width: this.props.width,
        };
    },
    componentDidMount: function() {
        this.setState({
            width:window.innerWidth - this.offset
        })

        window.addEventListener('scroll',() => {
            if(this.state.width === window.innerWidth - this.offset + window.scrollX) return
            this.setState({
                width:window.innerWidth - this.offset + window.scrollX
            })
        })

        window.addEventListener('resize',() => {
            this.setState({
                width:window.innerWidth - this.offset
            })
        })
    },
    render: function() {
        this.offset = this.props.width + 50  
        var style = {
            width:window.innerWidth - this.offset + window.scrollX
        }
        return (
            <ul className="toolbar" style={style}>
                            {this.listButton()}
                            {this.refreshButton()}
                            {this.downloadButton()}
                        </ul>
        );
    },
    
    listButton: function() {
        var style = {
            float: 'left',
        }
        return <List onClick={this.props.hideSidebar} style={style} />
    },

    refreshButton: function() {
        var style = {
            float: 'right',
        }
        return <Refresh onClick={this.props.refresh} style={style} />
    },

    downloadButton: function() {
        var style = {
            float: 'right',
        }
        return <Download href={this.props.src} style={style} />
    }
});
