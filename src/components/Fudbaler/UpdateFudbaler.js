import React, { Component } from "react";
import { connect } from "react-redux";
import { createFudbaler } from "../../actions/fudbalerActions";
import classnames from "classnames";
import { getFudbalerId } from "../../actions/fudbalerActions";

class UpdateFudbaler extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      name: "",
      surname: "",
      position: "",
      injured: "",
      jmbg: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getFudbalerId(id, this.props.history);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const { id, name, surname, position, injured, jmbg } = nextProps.fudbaler;

    this.setState({
      id,
      name,
      surname,
      position,
      injured,
      jmbg,
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const updateFudbaler = {
      name: this.state.name,
      surname: this.state.surname,
      position: this.state.position,
      injured: this.state.injured,
      jmbg: this.state.jmbg,
    };
    this.props.createFudbaler(updateFudbaler, this.props.history);
  }
  render() {
    const { errors } = this.state;

    return (
      <div className="fudbaler">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Fudbaler form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name,
                    })}
                    placeholder="Fudbaler Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.surname,
                    })}
                    placeholder="Fudbaler Surname"
                    name="surname"
                    value={this.state.surname}
                    onChange={this.onChange}
                  />
                  {errors.surname && (
                    <div className="invalid-feedback">{errors.surname}</div>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Fudbaler Position"
                    name="position"
                    value={this.state.position}
                    onChange={this.onChange}
                  ></textarea>
                </div>

                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    placeholder="Fudbaler Injured"
                    name="injured"
                    value={this.state.injured}
                    onChange={this.onChange}
                  >
                    <option>True</option>
                    <option>False</option>
                  </select>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.jmbg,
                    })}
                    placeholder="Fudbaler JMBG"
                    name="jmbg"
                    value={this.state.jmbg}
                    onChange={this.onChange}
                    disabled
                  />
                  {errors.jmbg && (
                    <div className="invalid-feedback">{errors.jmbg}</div>
                  )}
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  fudbaler: state.fudbaler.fudbaler,
  errors: state.errors,
});

export default connect(mapStateToProps, { getFudbalerId, createFudbaler })(
  UpdateFudbaler
);
