import React, { Component } from 'react';
import { MDBIcon } from "mdbreact";


export default class SocialList extends Component {
  render() {
    return (
      <div>
         <div className="container">
        <div className="row">
          <div className="col-md-12">
        <div className="inquiry-list social-list-bottom">
          <p><MDBIcon fab icon="facebook-f" /> <MDBIcon fab icon="instagram" /> <MDBIcon fab icon="twitter" /></p>
          <button type="button"  className="btn btn-dark rounded-border">View Details</button>
          <p className="float-right"><MDBIcon icon="angle-down" /> </p>
        </div>

        </div>
        </div>
      </div>
      </div>
    )
  }
}
