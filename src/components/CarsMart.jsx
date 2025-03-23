import React from "react";
import { useState } from "react";

import Header from "./Header";
import Features from "./Features";
import CarList from "./CarList";

const CARS = [
  {
    id: 1,
    title: "Luxury Sedan",
    brand: "Mercedes",
    year: 2023,
    price: 80000,
    isPremium: true,
  },
  {
    id: 2,
    title: "Family SUV",
    brand: "Toyota",
    year: 2022,
    price: 45000,
    isPremium: false,
  },
  {
    id: 3,
    title: "Sports Car",
    brand: "Porsche",
    year: 2023,
    price: 120000,
    isPremium: true,
  },
  {
    id: 4,
    title: "Electric Hatchback",
    brand: "Nissan",
    year: 2022,
    price: 35000,
    isPremium: false,
  },
  {
    id: 5,
    title: "Luxury SUV",
    brand: "BMW",
    year: 2023,
    price: 90000,
    isPremium: true,
  },
];

function CarsMart() {
  const [searchTerm, setSearchTerm] = useState("");
  // const [cars, setSelectCars] = useState(CARS);
  const [showPremium, setShowPremium] = useState(false);

  // const filteredCars = showPremium ? CARS.filter((car) => car.isPremium) : CARS;

  const filteredCars = CARS.filter(
    (car) => !showPremium || car.isPremium
  ).filter((car) => car.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="mx-auto p-4">
      <Header />
      <Features
        searchTerm={searchTerm}
        onSearchCar={setSearchTerm}
        onTogglePremium={setShowPremium}
      />
      <CarList cars={filteredCars} />
    </div>
  );
}

export default CarsMart;
