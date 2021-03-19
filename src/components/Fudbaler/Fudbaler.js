import React, { Component } from "react";
import { createFudbaler, getFudbaleri } from "../../actions/fudbalerActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FudbalerItem from "./FudbalerItem";
import CreateFudbalerButton from "../Fudbaler/CreateFudbalerButton";

class Fudbaler extends Component {
  componentDidMount() {
    this.props.getFudbaleri();
  }

  render() {
    const { fudbaleri } = this.props.fudbaler;
    return (
      <div>
        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">FUDBALERI</h1>
                <br />
                <CreateFudbalerButton />
                <br />
                <hr />
                {fudbaleri.map((fudbaler) => (
                  <FudbalerItem key={fudbaler.id} fudbaler={fudbaler} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fudbaler: state.fudbaler,
  fudbaleri: state.fudbaleri,
});

export default connect(mapStateToProps, { getFudbaleri })(Fudbaler);
