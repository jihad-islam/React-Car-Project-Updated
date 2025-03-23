import React from "react";

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

export default Features;
