import React, { Component } from 'react';
import { MDBIcon } from "mdbreact";

export default class Inquiry extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
        <div className="inquiry-list">
          <p><MDBIcon far icon="comment-dots" /> Inquiry</p>
          <p className="float-right"><MDBIcon icon="user-tag" /> Feedback</p>
        </div>

        </div>
        </div>
      </div>
    )
  }
}
