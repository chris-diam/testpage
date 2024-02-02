"use client";
import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Hotel from "./types";
import Slider from "@mui/material/Slider";

import FormControl from "@mui/material/FormControl";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface HotelProps {
  hotels: Hotel[];
  onClose: () => void;
}

const Filters: React.FC<HotelProps> = ({ hotels, onClose }) => {
  function valuetext(value: number) {
    return `${value}°C`;
  }

  const [value, setValue] = React.useState<number[]>([0, 500]);
  const [range, setRange] = useState<number>(500);
  const [rating, setRating] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const [mealPlan, setMealPlan] = useState<string[]>([
    "All Inclusive",
    "Half Board",
    "Bed Breakfast",
    "Room Only",
  ]);

  const handleMealPlanChange = (plan: any) => {
    setMealPlan((prevMeal) =>
      prevMeal.includes(plan)
        ? prevMeal.filter((m) => m !== plan)
        : [...prevMeal, plan]
    );
  };

  const [checked, setChecked] = React.useState(true);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div className="">
      <div className="flex md:block">
        <div className=" h-[1600px]  bg-[#ffffffcc] flex flex-col px-4 rounded-xl mt-[80px]">
          <h1 className="pb-4 font-bold text-[25px] pt-4 text-[#555543]">
            ΦΙΛΤΡΑ
          </h1>
          <h1 className="pb-4 font-bold text-[18px] pt-4 text-[#555543]">
            Εύρος Τιμής
          </h1>
          <div className="flex gap-4 px-2">
            <div className="flex flex-col">
              <label>Από</label>
              <TextField placeholder="€" sx={{ maxWidth: 120 }}></TextField>
            </div>
            <div className="flex flex-col">
              <label>Έως</label>
              <TextField placeholder="€" sx={{ maxWidth: 120 }}></TextField>
            </div>
          </div>
          <div className=" flex justify-center pt-3">
            <div className="flex start rotate-180 gap-[3px] ">
              {hotels.map((h: Hotel) => (
                <div
                  key={h.price}
                  style={{
                    height: `${h.price * 0.2}px`,
                    width: "10px",
                    backgroundColor: "#baedf9",
                  }}
                ></div>
              ))}
            </div>
          </div>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={range}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="50"
                control={<Radio />}
                label="Έως 50 €"
                onChange={() => {
                  setRange(50);
                }}
              />
              <FormControlLabel
                value="150"
                control={<Radio />}
                label="50-150 €"
                onChange={() => {
                  setRange(150);
                }}
              />
              <FormControlLabel
                value="500"
                control={<Radio />}
                label="150-500 €"
                onChange={() => {
                  setRange(500);
                }}
              />
            </RadioGroup>
          </FormControl>
          <div className="flex items-center justify  pt-4 center center">
            <hr className="w-2/3 relative left-[18%] " />
          </div>
          <div className="pt-6">
            <FormControl>
              <FormLabel className="pb-4 font-bold">ΠΡΩΙΝΟ</FormLabel>

              <FormControlLabel
                control={<Checkbox defaultChecked={true} />}
                label="All Inclusive"
                onChange={() => handleMealPlanChange("All Inclusive")}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={true} />}
                label="Half Board"
                onChange={() => {
                  if (mealPlan.includes("Half Board"))
                    setMealPlan((prevMeal) =>
                      prevMeal.filter((m) => m !== "Half Board")
                    );
                  else {
                    setMealPlan((prevMeal) => [...prevMeal, "Half Board"]);
                  }
                }}
              />

              <FormControlLabel
                control={<Checkbox defaultChecked={true} />}
                label="Bed Breakfast"
                onChange={() => {
                  if (mealPlan.includes("Bed Breakfast"))
                    setMealPlan((prevMeal) =>
                      prevMeal.filter((m) => m !== "Bed Breakfast")
                    );
                  else {
                    setMealPlan((prevMeal) => [...prevMeal, "Bed Breakfast"]);
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={true} />}
                label="Room Only"
                onChange={() => {
                  if (mealPlan.includes("Room Only"))
                    setMealPlan((prevMeal) =>
                      prevMeal.filter((m) => m !== "Room Only")
                    );
                  else {
                    setMealPlan((prevMeal) => [...prevMeal, "Room Only"]);
                  }
                }}
              />
            </FormControl>
          </div>
          <div className="flex items-center justify  pt-4 center center">
            <hr className="w-2/3 relative left-[18%] " />
          </div>
          <div className="pt-6">
            <FormControl>
              <FormLabel className="pb-4 font-bold">ΑΣΤΕΡΙΑ</FormLabel>

              <FormControlLabel
                control={<Checkbox defaultChecked={true} />}
                label="0"
                onChange={() => {
                  if (rating.includes(0))
                    setRating((prevRating) =>
                      prevRating.filter((r) => r !== 0)
                    );
                  else {
                    setRating((prevRating) => [...prevRating, 0]);
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={true} />}
                label="1"
                onChange={() => {
                  if (rating.includes(1))
                    setRating((prevRating) =>
                      prevRating.filter((r) => r !== 1)
                    );
                  else {
                    setRating((prevRating) => [...prevRating, 1]);
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={true} />}
                label="2"
                onChange={() => {
                  if (rating.includes(2))
                    setRating((prevRating) =>
                      prevRating.filter((r) => r !== 2)
                    );
                  else {
                    setRating((prevRating) => [...prevRating, 2]);
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={true} />}
                label="3"
                onChange={() => {
                  if (rating.includes(3))
                    setRating((prevRating) =>
                      prevRating.filter((r) => r !== 3)
                    );
                  else {
                    setRating((prevRating) => [...prevRating, 3]);
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={true} />}
                label="4"
                onChange={() => {
                  if (rating.includes(4))
                    setRating((prevRating) =>
                      prevRating.filter((r) => r !== 4)
                    );
                  else {
                    setRating((prevRating) => [...prevRating, 4]);
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked={true} />}
                label="5"
                onChange={() => {
                  if (rating.includes(5))
                    setRating((prevRating) =>
                      prevRating.filter((r) => r !== 5)
                    );
                  else {
                    setRating((prevRating) => [...prevRating, 5]);
                  }
                }}
              />
            </FormControl>
          </div>
          <div className="pl-10 pt-4">
            <button
              onClick={onClose}
              className="h-12 w-48  text-white rounded-lg  border-solid  bg-[#009649] hover:bg-[#009649]"
            >
              Εφαρμογή
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
