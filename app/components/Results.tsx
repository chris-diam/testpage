"use client";
import { useState } from "react";
import { TextField } from "@mui/material";
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

  return (
    <div className="flex flex-col w-full h-full ">
      <div className="text-center flex flex-col justify-center align-middle">
        <p>Breadcrumbs</p>
        <h1 className="text-[76px]  tracking-[3.8px] font-semibold text-[#555563] leading-[76px] not-italic">
          ΕΛΛΑΔΑ
        </h1>
        <p>Πακέτα - Προσφορές</p>
      </div>
      <div className="flex items-start self-stretch gap-[24px] px-[10%]">
        <div className="w-[60%] h-full bg-[#f2fbfd]">
          <h1>ΦΙΛΤΡΑ</h1>
          <h1>Εύρος Τιμής</h1>
          <div className="flex gap-4 px-4">
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
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
          <hr />
          <div>
            <h1>ΦΙΛΤΡΟ</h1>
            <ul>
              <li>Φιλτρο</li>
              <li>Φιλτρο</li>
              <li>Φιλτρο</li>
            </ul>
          </div>
          <hr />
          <div>
            <h1>ΦΙΛΤΡΟ</h1>
            <ul>
              <li>Φιλτρο</li>
              <li>Φιλτρο</li>
              <li>Φιλτρο</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex justify-between pb-6">
            <p>{hotels.length} διαθέσιμα πακέτα διακοπών</p>
            <Box sx={{ minWidth: 120, paddingRight: "80px" }}>
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

          {sortType === "name" ? (
            <Grid container rowSpacing={2}>
              {sortedHotelsByName.map((h: Hotel) => (
                <Grid item key={h.name} xs={4}>
                  <HotelComponent hotel={h} />
                </Grid>
              ))}
            </Grid>
          ) : null}

          {sortType === "priceAsc" ? (
            <Grid container rowSpacing={2}>
              {sortedHotelsByPrice.map((h: Hotel) => (
                <Grid item key={h.name} xs={4}>
                  <HotelComponent hotel={h} />
                </Grid>
              ))}
            </Grid>
          ) : null}

          {sortType === "priceDesc" ? (
            <Grid container rowSpacing={2}>
              {sortedHotelsByDescendingPrice.map((h: Hotel) => (
                <Grid item key={h.name} xs={4}>
                  <HotelComponent hotel={h} />
                </Grid>
              ))}
            </Grid>
          ) : null}
        </div>
      </div>
      <div className="flex items-center justify-center pt-52 pb-24">
        <Image src={footerImage} alt="footer image" />
      </div>
    </div>
  );
}
