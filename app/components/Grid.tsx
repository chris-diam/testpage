"use client";
import React, { useState } from "react";
import HotelComponent from "./HotelComponent";
import Hotel from "./types";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface HotelProps {
  hotels: Hotel[];
}

const Grid: React.FC<HotelProps> = ({ hotels }) => {
  const sortedHotelsByName = hotels
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  const sortedHotelsByPrice = hotels.slice().sort((a, b) => a.price - b.price);
  const sortedHotelsByDescendingPrice = hotels
    .slice()
    .sort((a, b) => b.price - a.price);

  const [sortType, setSortType] = useState("name");

  const handleChange = (event: SelectChangeEvent) => {
    setSortType(event.target.value as string);
  };

  function valuetext(value: number) {
    return `${value}°C`;
  }

  const [range, setRange] = useState<number>(500);
  const [rating, setRating] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const [mealPlan, setMealPlan] = useState<string[]>([
    "All Inclusive",
    "Half Board",
    "Bed Breakfast",
    "Room Only",
  ]);

  return (
    <div className="w-full relative flex flex-col pt-4 absolute inline-y-0 left mr-[00px]">
      <div className="w-full relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#555563] pt-3 md:pt-0 md:pr-4">
            <b>{hotels.length}</b> διαθέσιμα πακέτα διακοπών
          </p>
          <div className="md:absolute top-0 right-0">
            <Box
              sx={{
                minWidth: 120,
                color: "#555563",
                backgroundColor: "white",
                borderRadius: "12px",
                marginLeft: "20px",
              }}
            >
              <FormControl fullWidth>
                <Select
                  value={sortType}
                  placeholder="Δημοφιλή"
                  onChange={handleChange}
                >
                  <MenuItem value={"name"}>Αύξουσα αλφαβητική σειρά</MenuItem>
                  <MenuItem value={"priceAsc"}>Αύξουσα τιμή</MenuItem>
                  <MenuItem value={"priceDesc"}>Φθίνουσα τιμή</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>

        <div className="pt-3 md:pt-10 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {sortType === "name" &&
              sortedHotelsByName
                .filter(
                  (h) =>
                    h.price < range &&
                    mealPlan.includes(h.meal_plan) &&
                    rating.includes(h.rating)
                )
                .map((h: Hotel) => (
                  <div key={h.name}>
                    <HotelComponent hotel={h} />
                  </div>
                ))}
            {sortType === "name" &&
              sortedHotelsByName.filter(
                (h) =>
                  h.price < range &&
                  mealPlan.includes(h.meal_plan) &&
                  rating.includes(h.rating)
              ).length === 0 && (
                <div className="pl-12 break-keep	transform hover:scale-105">
                  <p className="font-bold text-xl w-[1880px]	pl-18 text-[#555563] pt-16">
                    ΔΕΝ ΒΡΕΘΗΚΑΝ ΑΠΟΤΕΛΕΣΜΑΤΑ{" "}
                  </p>
                </div>
              )}
            {sortType === "priceAsc" &&
              sortedHotelsByPrice
                .filter(
                  (h) =>
                    h.price < range &&
                    mealPlan.includes(h.meal_plan) &&
                    rating.includes(h.rating)
                )
                .map((h: Hotel) => (
                  <div key={h.name}>
                    <HotelComponent hotel={h} />
                  </div>
                ))}
            {sortType === "priceAsc" &&
              sortedHotelsByPrice.filter(
                (h) =>
                  h.price < range &&
                  mealPlan.includes(h.meal_plan) &&
                  rating.includes(h.rating)
              ).length === 0 && (
                <div className="pl-12 break-keep	">
                  <p className="font-bold text-5xl w-[1880px]	pl-12 text-[#555563] pt-6">
                    ΔΕΝ ΒΡΕΘΗΚΑΝ ΑΠΟΤΕΛΕΣΜΑΤΑ{" "}
                  </p>
                </div>
              )}
            {sortType === "priceDesc" &&
              sortedHotelsByDescendingPrice
                .filter(
                  (h) =>
                    h.price < range &&
                    mealPlan.includes(h.meal_plan) &&
                    rating.includes(h.rating)
                )
                .map((h: Hotel) => (
                  <div key={h.name}>
                    <HotelComponent hotel={h} />
                  </div>
                ))}
            {sortType === "priceDesc" &&
              sortedHotelsByDescendingPrice.filter(
                (h) =>
                  h.price < range &&
                  mealPlan.includes(h.meal_plan) &&
                  rating.includes(h.rating)
              ).length === 0 && (
                <div>
                  <p className="font-bold text-5xl w-[1880px]	pl-12 text-[#555563] pt-6">
                    ΔΕΝ ΒΡΕΘΗΚΑΝ ΑΠΟΤΕΛΕΣΜΑΤΑ{" "}
                  </p>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
