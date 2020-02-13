import React from "react";
import propTypes from "prop-types";

const Repositems = ({ repo }) => {
  return (
    <div>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

Repositems.propTypes = {
  repo: propTypes.object.isRequired
};
export default Repositems;
