import React from "react";
import PropTypes from "prop-types";

function CarDetails({ car }) {
  return (
    <div className="shadow p-4 rounded">
      <h1 className="font-semibold text-xl">{car.title}</h1>
      <p>
        <span className="font-semibold">Brand</span>: {car.brand}
      </p>
      <p>
        <span className="font-semibold">Year</span>: {car.year}
      </p>
      <p>
        <span className="font-semibold">Price: $</span>
        {car.price}
      </p>
      <p>
        <span className="font-semibold">Premium: </span>
        {car.isPremium ? "Yes" : "No"}
      </p>
    </div>
  );
}

CarDetails.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarDetails;
