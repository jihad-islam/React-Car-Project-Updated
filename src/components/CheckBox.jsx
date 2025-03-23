import React from "react";
import PropTypes from "prop-types";

function CheckBox({ onTogglePremium }) {
  const handleChange = (e) => {
    onTogglePremium(e.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleChange} />
        <span className="font-semibold"> Show Premium Only</span>
      </label>
    </div>
  );
}

CheckBox.propTypes = {
  onTogglePremium: PropTypes.func.isRequired,
};

export default CheckBox;
