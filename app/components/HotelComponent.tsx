"use client";
import React, { useState, useEffect } from "react";
import Hotel from "./types";

interface HotelProps {
  hotel: Hotel;
}

const HotelComponent: React.FC<HotelProps> = ({ hotel }) => {
  const meal = hotel.meal_plan;
  const [mealPlan, setMealPlan] = useState("");
  useEffect(() => {
    if (meal === "Bed Breakfast") {
      setMealPlan("Πρωινό στο κρεββατι");
    } else if (meal === "All Inclusive") {
      setMealPlan("All Inclusive");
    } else if (meal === "Half Board") {
      setMealPlan("ημιδιατροφή");
    } else if (meal === "Room Only") {
      setMealPlan("πρωινο στο δωματιο");
    }
  });

  return (
    <div className="laptop:w-[312px] xsm:mt-8 sm:w-[200px] duration-300  hover:scale-105	 h-[479px] text-[#555563] uppercase font-bold bg-white shadow-lg backdrop-blur-lg	 rounded-md	flex flex-col items-start">
      <img
        src={hotel.photo}
        alt={hotel.name}
        className="rounded-md w-full h-[60%]"
      />
      <div className="relative pt-2 pr-8">
        <p className="text-[#838393]  text-[10px] absolute inset-y-6 left-0 pl-7">
          {mealPlan}{" "}
        </p>
        <p className="pt-8 pl-6 font-bold	laptop:text-[20px] sm:text-[14px]">
          ΚΑΛΟΚΑΙΡΙ ΣΤΟ {hotel.name} {hotel.rating}* ΣΤΟ {hotel.city}
        </p>
      </div>
      <div className="flex flex-row justify-between w-full px-6">
        <div className=" w-full h-full flex flex-row  pt-12 justify-between text-center align-middle">
          <div className="flex gap-[6px] ">
            <p className="laptop:text-[12px]    absolute bottom-6 left-4 xsm:text-[10px]">
              AΠΟ
            </p>{" "}
            <p className="sm:text-[14px] laptop:text-[22px]  xsm:pl-8 xsm:pb-1 absolute xsm:bottom-5 laptop:bottom-4 sm:left-10 md:left-4 ">
              {hotel.price}€
            </p>
          </div>
          <div className="h-full">
            <button className="bg-[#009649] absolute  bottom-4 right-5 h-12  sm:w-1/3 justify-center  rounded-lg text-white text-[14px]">
              Κράτηση
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelComponent;
