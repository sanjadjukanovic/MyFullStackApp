import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteFudbaler } from "../../actions/fudbalerActions";

class FudbalerItem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteFudbaler(id);
  };

  render() {
    const { fudbaler } = this.props;
    return (
      <div>
        <div className="container">
          <div className="card card-body bg-light mb-3">
            <div className="row">
              <div className="col-2">
                <span className="mx-auto">{fudbaler.jmbg}</span>
              </div>
              <div className="col-lg-6 col-md-4 col-8">
                <h3>{fudbaler.name}</h3>
                <h3>{fudbaler.surname}</h3>
                <p>{fudbaler.position}</p>
                <h3>{fudbaler.injured}</h3>
              </div>
              <div className="col-md-4 d-none d-lg-block">
                <ul className="list-group">
                  <Link to={`/updateFudbaler/${fudbaler.id}`}>
                    <li className="list-group-item update">
                      <i className="fa fa-edit pr-1">Update Fudbaler Info</i>
                    </li>
                  </Link>
                  <a href="">
                    <li
                      className="list-group-item delete"
                      onClick={this.onDeleteClick.bind(this, fudbaler.id)}
                    >
                      <i className="fa fa-minus-circle pr-1">Delete Fudbaler</i>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { deleteFudbaler })(FudbalerItem);
