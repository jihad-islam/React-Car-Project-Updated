import React from "react";

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

export default CheckBox;
