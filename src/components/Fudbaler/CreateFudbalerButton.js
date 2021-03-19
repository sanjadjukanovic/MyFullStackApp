import React from "react";
import { Link } from "react-router-dom";

const CreateFudbalerButton = () => {
  return (
    <React.Fragment>
      <Link to="/addFudbaler" className="btn btn-lg btn-info">
        Create a Fudbaler
      </Link>
    </React.Fragment>
  );
};

export default CreateFudbalerButton;
