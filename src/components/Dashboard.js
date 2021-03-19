import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;

    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Fudbaleri</h1>
              {
                <React.Fragment>
                  <Link to="/fudbaler" className="btn btn-lg btn-info">
                    Go to Fudbaleri
                  </Link>
                </React.Fragment>
              }
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />

              <br />
              <br />
              {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.project,
  projects: state.project.projects,
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
