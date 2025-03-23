import React from "react";
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

export default CarList;
