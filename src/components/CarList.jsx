import React from "react";
import PropTypes from "prop-types";
import CarDetails from "./CarDetails";

function CarList({ cars }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {cars.map((car) => (
        <CarDetails key={car.id} car={car} />
      ))}
    </div>
  );
}

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default CarList;
