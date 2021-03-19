import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Personal Project Management Tool</h1>
        <br />
        <div className="col-md-12">
          <React.Fragment>
            <Link to="/dashboard" className="btn btn-lg btn-info">
              Go to Dashboard
            </Link>
          </React.Fragment>
        </div>
      </div>
    );
  }
}
