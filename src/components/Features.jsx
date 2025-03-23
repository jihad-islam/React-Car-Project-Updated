import React from "react";
import PropTypes from "prop-types";

import Search from "./Search";
import CheckBox from "./CheckBox";

function Features({ searchTerm, onSearchCar, onTogglePremium }) {
  return (
    <div className="mb-4 flex">
      <Search searchTerm={searchTerm} onSearchCar={onSearchCar} />
      <CheckBox onTogglePremium={onTogglePremium} />
    </div>
  );
}

Features.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchCar: PropTypes.func.isRequired,
  onTogglePremium: PropTypes.func.isRequired,
};

export default Features;
