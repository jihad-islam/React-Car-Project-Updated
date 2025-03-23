import React from "react";
import PropTypes from "prop-types";

function Search({ searchTerm, onSearchCar }) {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search cars.."
          value={searchTerm}
          onChange={(e) => onSearchCar(e.target.value)}
          className="border rounded-md p-1 mr-4"
        />
      </form>
    </div>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchCar: PropTypes.func.isRequired,
};

export default Search;
