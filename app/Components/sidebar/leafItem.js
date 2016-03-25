import React from "react";
import cx from "classnames"

export default React.createClass({  
  propTypes:{
    obj: React.PropTypes.object.isRequired,
    current: React.PropTypes.string
  },

  render: function() {
    var classes = cx({
      'current':this.props.current === this.props.obj.report_id,
      'leaf':true
    })
    return (
      <li className={classes}><nobr><a href={"#"+this.props.obj.report_id}>{this.props.obj.title}</a></nobr></li>
    );
  },
});