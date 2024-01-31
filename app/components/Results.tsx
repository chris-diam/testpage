"use client";
import { useState } from "react";
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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
    <div className="flex flex-col w-full h-full justify-center">
      <div className="text-center flex flex-col align-middle">
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
        <div className="flex justify-center pt-[8px] ">
          <div className=" w-[1096px] h-[64px] bg-white rounded-lg flex justify-between">
            <FormControl size="medium">
              <InputLabel></InputLabel>
              <Select value={sortType} onChange={handleChange}>
                <MenuItem value="name">Ελλάδα</MenuItem>
                <MenuItem value="priceAsc">Κύπρος</MenuItem>
                <MenuItem value="priceDesc">Ιταλία</MenuItem>
                <MenuItem value="usa">Γαλλία</MenuItem>
                <MenuItem value="germany">Γερμανία</MenuItem>
                <MenuItem value="france">Ηνωμένο Βασίλειο</MenuItem>
                <MenuItem value="japan">Ιαπωνία</MenuItem>
              </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{ border: "none" }}
              >
                <DatePicker
                  label="Check in"
                  sx={{ width: "100%" }}
                  slotProps={{ textField: { variant: "standard" } }}
                />
              </DemoContainer>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label="Check out" />
              </DemoContainer>
            </LocalizationProvider>

            <FormControl>
              <InputLabel>Αριθμός Ατόμων</InputLabel>
              <Select
                value={sortType}
                defaultValue="Aριθμός Ατόμων"
                onChange={handleChange}
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
      <div className="flex items-start flex-row gap-[24px] pt-[64px] px-[300px]">
        <div className=" ">
          <div className=" h-full bg-[#f2fbfd] rounded-xl mt-[80px]">
            <h1>ΦΙΛΤΡΑ </h1>
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
        </div>
        <div className="w-fit ">
          <div className=" w-fit">
            <div className="flex justify-between ">
              <p className="text-[#555563]">
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
                <div className="grid grid-cols-3 gap-4">
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
