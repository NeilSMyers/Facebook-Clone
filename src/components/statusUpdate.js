import React, { Component } from 'react';

class StatusUpdate extends Component {
  constructor(props) {
    super()

  }

  render() {
    return (
      <div className="status-wrapper">

        <div className="status-identity">
          <img src="../assets/images/fox.jpg"/>
          <h4>{this.props.name}</h4>
          <p className="status-time">10 minutes ago</p>
          <span>...</span>
        </div>

        <div className="status-body">
          <h5>This is the status update shtuff.</h5>
          <span>likers</span>
          <p># of comments</p>
        </div>

        <div className="status-response">
          <span>like</span>
          <span>comment</span>
          <span>share</span>
        </div>

        <div className="comments">

        </div>

      </div>
    );
  }
}

export default StatusUpdate;