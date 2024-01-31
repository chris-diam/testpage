"use client";
import React, { useState } from "react";
import { Link, TextField } from "@mui/material";
import HotelComponent from "./HotelComponent";
import Hotel from "./types";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import footerImage from "../images/photo.png";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@mui/material/Button";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";

interface ResultsProps {
  hotels: Hotel[];
}

export default function Results({ hotels }: { hotels: Hotel[] }) {
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
        <h1 className="text-[76px] pt-[64px] tracking-[3.8px] font-semibold text-[#555563] leading-[76px] not-italic">
          ΕΛΛΑΔΑ
        </h1>
        <p className="pt-[8px] text-[#555563] ">Πακέτα - Προσφορές</p>

        <div className="pt-[64px]  flex justify-center gap-4 ">
          <div className="bg-[#f6fbfc] rounded-3xl flex justify-between w-[245px]">
            <Button className="bg-white w-[48%] rounded-3xl normal-case shadow-lg backdrop-blur-lg text-[#555563]	active:text-[#009649] focus:text-[#009649]">
              Εκδρομές
            </Button>
            <Button className="bg-white w-[48%] rounded-3xl normal-case shadow-lg backdrop-blur-lg text-[#555563]	active:text-[#009649] focus:text-[#009649]">
              Ξενοδοχεία
            </Button>
          </div>
        </div>
        <div className="flex justify-center pt-8 pb-[8px]">
          <div className=" w-[1096px] h-[64px] bg-white rounded-lg flex justify-between">
            <FormControl size="medium" sx={{ minWidth: "150px", color: "red" }}>
              <InputLabel></InputLabel>
              <Select value={sortType} onChange={handleChange}>
                <MenuItem value="name">Ελλάδα</MenuItem>
                <MenuItem value={"name"}>Κύπρος</MenuItem>
                <MenuItem value="name">Ιταλία</MenuItem>
                <MenuItem value="name">Γαλλία</MenuItem>
                <MenuItem value="name">Γερμανία</MenuItem>
                <MenuItem value="name">Ηνωμένο Βασίλειο</MenuItem>
                <MenuItem value="name">Ιαπωνία</MenuItem>
              </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Check in" />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Check out" />
            </LocalizationProvider>

            <FormControl sx={{ minWidth: "160px", border: "none" }}>
              <InputLabel>Αριθμός Ατόμων</InputLabel>
              <Select
                value={""}
                defaultValue="Aριθμός Ατόμων"
                onChange={handleChange}
                inputProps={{
                  style: {
                    border: "none",
                    backgroundColor: "red",
                  },
                }}
              >
                <MenuItem value="name">1</MenuItem>
                <MenuItem value="priceAsc">2</MenuItem>
                <MenuItem value="priceDesc">3</MenuItem>
                <MenuItem value="usa">4</MenuItem>
                <MenuItem value="germany">5</MenuItem>
                <MenuItem value="france">6</MenuItem>
                <MenuItem value="japan">7</MenuItem>
                <MenuItem value="japan">8</MenuItem>
              </Select>
            </FormControl>
            <div className="px-[8px] py-2">
              <Button className=" h-12 rounded-xl normal-case shadow-lg gap-2 backdrop-blur-lg text-white	 bg-[#009649] hover:bg-[#009649]">
                <FontAwesomeIcon icon={faSearch} color="white" />
                <p>Αναζήτηση</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" gap-[24px] pt-[64px] flex px-[300px]">
        <div className="flex">
          <div className=" h-[1600px] border-black bg-[#ffffffcc] flex flex-col px-4 rounded-xl mt-[80px]">
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
            <div className="pt-4 flex justify-center">
              <div className="flex start rotate-180 gap-[3px] ">
                {hotels.map((h: Hotel) => (
                  <div
                    className="hover:bg-clack"
                    key={h.price}
                    style={{
                      bottom: "0", // Align the bottom of the div
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
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="50"
                  control={<Radio />}
                  label="Έως 50 €"
                />
                <FormControlLabel
                  value="150"
                  control={<Radio />}
                  label="50-150 €"
                />
                <FormControlLabel
                  value="500"
                  control={<Radio />}
                  label="150-500 €"
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
                  control={<Checkbox />}
                  label="All Inclusive"
                />
                <FormControlLabel control={<Checkbox />} label="Half Board" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Bed Breakfast"
                />
                <FormControlLabel control={<Checkbox />} label="Room Only" />
              </FormControl>
            </div>
            <div className="flex items-center justify  pt-4 center center">
              <hr className="w-2/3 relative left-[18%] " />
            </div>
            <div className="pt-6">
              <FormControl>
                <FormLabel className="pb-4 font-bold">ΑΣΤΕΡΙΑ</FormLabel>

                <FormControlLabel control={<Checkbox />} label="0" />
                <FormControlLabel control={<Checkbox />} label="1" />
                <FormControlLabel control={<Checkbox />} label="2" />
                <FormControlLabel control={<Checkbox />} label="3" />
                <FormControlLabel control={<Checkbox />} label="4" />
                <FormControlLabel control={<Checkbox />} label="5" />
              </FormControl>
            </div>
          </div>
        </div>
        <div className="w-fit ">
          <div className=" w-fit">
            <div className="flex justify-between ">
              <p className="text-[#555563] pt-3">
                <b>{hotels.length}</b> διαθέσιμα πακέτα διακοπών
              </p>
              <Box
                sx={{
                  minWidth: 100,
                  color: "#555563",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel></InputLabel>
                  <Select value={sortType} label="" onChange={handleChange}>
                    <MenuItem value={"name"}>Αύξουσα αλφαβητική σειρά</MenuItem>
                    <MenuItem value={"priceAsc"}>Αύξουσα τιμή</MenuItem>
                    <MenuItem value={"priceDesc"}>Φθίνουσα τιμή</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="pt-[24px]">
              {sortType === "name" ? (
                <div className="grid grid-cols-3 gap-6">
                  {sortedHotelsByName.map((h: Hotel) => (
                    <HotelComponent hotel={h} />
                  ))}
                </div>
              ) : null}

              {sortType === "priceAsc" ? (
                <div className="grid grid-cols-3 gap-4">
                  {sortedHotelsByPrice.map((h: Hotel) => (
                    <HotelComponent hotel={h} />
                  ))}
                </div>
              ) : null}

              {sortType === "priceDesc" ? (
                <div className="grid grid-cols-3 gap-4">
                  {sortedHotelsByDescendingPrice.map((h: Hotel) => (
                    <HotelComponent hotel={h} />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-52 pb-24">
        <Image src={footerImage} alt="footer image" />
      </div>
    </div>
  );
}
