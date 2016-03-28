import React from "react";
import Item from "./toolbarItem"
import List from "./list_button"
import Refresh from "./refresh_button"
import Download from "./download_button"

export default React.createClass({
    render: function() {
        return (
            <ul className="toolbar">
							{this.listButton()}
							{this.refreshButton()}
							{this.downloadButton()}
						</ul>
        );
    },
    onClickHandler: function(e) {
        alert(e)
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
