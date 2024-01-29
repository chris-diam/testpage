import React from "react";
import Hotel from "./types";

interface HotelProps {
  hotel: Hotel;
}

const HotelComponent: React.FC<HotelProps> = ({ hotel }) => {
  return (
    <div className="w-[312px] h-[479px]">
      <img src={hotel.photo} alt={hotel.name} />
      <p>Name: {hotel.name}</p>
      <p>Rating: {hotel.rating}</p>
      <p>Meal Plan: {hotel.meal_plan}</p>
      <p>City: {hotel.city}</p>
      <p>Price: {hotel.price}</p>
    </div>
  );
};

export default HotelComponent;
