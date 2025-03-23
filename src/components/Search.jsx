import React from "react";

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

export default Search;
