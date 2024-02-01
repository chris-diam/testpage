"use client";
import React, { useState } from "react";
import { Link, TextField } from "@mui/material";
import HotelComponent from "./HotelComponent";
import Hotel from "./types";
import Slider from "@mui/material/Slider";
import footerImage from "../images/photo.png";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@mui/material/Button";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

interface ResultsProps {
  hotels: Hotel[];
}

export default function Results<ResultsProps>({ hotels }: { hotels: Hotel[] }) {
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
    <div className="flex flex-col w-full h-full justify-center">
      <div className="text-center flex flex-col align-middle ">
        <Breadcrumbs
          className="pt-[24px]"
          aria-label="breadcrumb"
          separator={
            <FontAwesomeIcon
              icon={faChevronRight}
              fontSize="small"
              color="#009649"
            />
          }
          sx={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Link underline="hover" color="inherit" href="/">
            Αρχική
          </Link>
          <Link underline="hover" color="#555563">
            Ελλάδα
          </Link>
          <Link underline="hover" color="#555563" aria-current="page">
            Πακέτα
          </Link>
        </Breadcrumbs>
        <h1 className="visible md:hidden text-[20px] pt-[34px] tracking-[3.8px] font-semibold text-[#555563] leading-[76px] not-italic">
          ΠΕΛΛΟΠΟΝΝΗΣΟΣ
        </h1>
        <h1 className="hidden md:block text-[76px] pt-[64px] tracking-[3.8px] font-semibold text-[#555563] leading-[76px] not-italic">
          ΕΛΛΑΔΑ
        </h1>

        <p className="pt-[8px] text-[#555563] ">Πακέτα - Προσφορές</p>

        {/* <button className="bg-white flex justify-center mt-6">
          <div className="flex flex-row">
            <div className="flex flex-col flex-start">
              <p>ΠΕΛΛΟΠΟΝΗΣΟΣ</p>
              <p>03/08/2003-08/08/2023 · 2 ενήλικες</p>
            </div>
            <FontAwesomeIcon icon={faEdit} />
          </div>
        </button> */}

        <div className="flex justify-center  md:hidden w-full pt-4 ">
          <button className="flex justify-between w-[220px] bg-white rounded-3xl  border-solid border text-[#555563]">
            <div className="flex flex-col h-10 pt-1 pl-1">
              <b className="text-[10px] ">ΠΕΛΛΟΠΟΝΝΗΣΟΣ </b>
              <p className="text-[10px]">03/08/2023 - 08/08/2023</p>
            </div>
            <FontAwesomeIcon
              icon={faEdit}
              className="pt-3 pr-4 text-[#009649]"
            />
          </button>
        </div>

        <div className="pt-[64px]   justify-center gap-4 hidden md:flex ">
          <div className="bg-[#f6fbfc] rounded-3xl flex justify-between w-[245px]  ">
            <button className="bg-white w-[48%] rounded-3xl normal-case shadow-lg backdrop-blur-lg text-[#555563]	active:text-[#009649] focus:text-[#009649]">
              Εκδρομές
            </button>
            <button className="bg-white h-10 w-[48%] rounded-3xl normal-case shadow-lg backdrop-blur-lg text-[#555563]	active:text-[#009649] focus:text-[#009649]">
              Ξενοδοχεία
            </button>
          </div>
        </div>
        <div className="flex justify-center pt-8 pb-[8px] ">
          <div className=" w-[1096px] h-[64px] bg-white rounded-lg invisible md:visible">
            <div className="flex grid-cols-5 justify-evenly pt-2 px-3 gap-1">
              <input
                type="text"
                className="outline-none border-none bg-transparent px-4 py-2 text-gray-700"
                placeholder="Προορισμός"
              />

              <input
                type="text"
                className="outline-none border-none bg-transparent px-4 py-2 text-gray-700"
                placeholder="Check In"
              />
              <input
                type="text"
                className="outline-none border-none bg-transparent px-4 py-2 text-gray-700"
                placeholder="Check Out"
              />
              <input
                type="text"
                className="outline-none border-none bg-transparent px-4 py-2 text-gray-700"
                placeholder="Αριθμός ατόμων"
              />

              <div className="flex justify-center ">
                <button className="h-12 w-48 gap-2  text-white rounded-lg  border-solid  bg-[#009649] hover:bg-[#009649]">
                  Αναζήτηση{" "}
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="fa-light fa-paper-plane"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="  gap-[24px] pt-[64px] flex px-9 md:px-[300px] "
        style={{ margin: "auto" }}
      >
        <div className="flex hidden md:block">
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
          </div>
        </div>
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
                      <MenuItem value={"name"}>
                        Αύξουσα αλφαβητική σειρά
                      </MenuItem>
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
      </div>
      <div>
        <div className="flex justify-center  pb-24">
          <button className="h-14 w-56 text-[#009649] rounded-lg  border-solid border-2 border-[#009649]">
            Δείτε περισσότερα ({" 127 "})
          </button>
        </div>
        <div
          className="m-auto mb-[60px] w-[360px]  md:w-[1320px] rounded-lg h-[440px] w-[1180px] flex items-center justify-center"
          style={{
            backgroundImage: `url(${footerImage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Add this line
          }}
        >
          <div>
            <h1 className="text-white text-3xl font-bold mb-2">
              ΔΕΝ ΒΡΗΚΑΤΕ ΑΥΤΟ ΠΟΥ ΨΑΧΝΕΤΕ;
            </h1>
            <div className="flex justify-center ">
              <button className="h-14 w-56 gap-2 text-white rounded-lg  border-solid border-2 border-white">
                Επικοινωνήστε μαζί μας{" "}
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="fa-light fa-paper-plane"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
