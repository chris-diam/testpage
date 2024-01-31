"use client";
import React from "react";
import Hotel from "./types";

interface HotelProps {
  hotel: Hotel;
}

const HotelComponent: React.FC<HotelProps> = ({ hotel }) => {
  return (
    <div className="w-[312px] h-[479px] bg-white shadow-lg backdrop-blur-lg	 rounded-md	flex flex-col items-start">
      <img
        src={hotel.photo}
        alt={hotel.name}
        className="rounded-md w-full h-[60%]"
      />
      <p>Name: {hotel.name}</p>
      <p>Rating: {hotel.rating}</p>
      <p>Meal Plan: {hotel.meal_plan}</p>
      <p>City: {hotel.city}</p>
      <div className="flex flex-row justify-between w-full px-6">
        <div className=" w-24 flex flex-row">
          <div className="flex gap-[6px]">
            Από <p>{hotel.price}</p>
          </div>
        </div>
        <button className="bg-[#009649]  h-12 w-20 justify-center align-baseline rounded-lg text-white text-[14px]">
          Κράτηση
        </button>
      </div>
    </div>
  );
};

export default HotelComponent;
