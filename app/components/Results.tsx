"use client";
import React, { useState } from "react";
import Hotel from "./types";
import footerImage from "../images/photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Grid from "./Grid";
import Filters from "./Filters";
import TopSection from "./TopSection";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import Popup from "./Popup";

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

  const [open, setOpen] = useState(false);

  const openFilters = () => {
    setOpen(!open);
  };

  const [mealPlan, setMealPlan] = useState<string[]>([
    "All Inclusive",
    "Half Board",
    "Bed Breakfast",
    "Room Only",
  ]);

  return (
    <div>
      {open ? (
        <Popup onClose={openFilters} hotels={hotels} />
      ) : (
        <>
          <div className="flex flex-col w-full h-full justify-center">
            <TopSection />
            <div className="flex md:hidden justify-center pt-20 gap-5">
              <button
                onClick={() => setOpen(true)}
                className="h-14 w-56 text-[#009649] rounded-lg  border-solid border-2 border-[#009649]"
              >
                <FontAwesomeIcon icon={faSliders} />
                Φίλτρα
              </button>
            </div>

            <div
              className="  gap-[24px] pt-[64px] flex px-9 md:px-[300px] "
              style={{ margin: "auto" }}
            >
              <div className="hidden sm:flex">
                <Filters hotels={hotels} onClose={openFilters} />
              </div>
              <Grid hotels={hotels} />
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
        </>
      )}
    </div>
  );
}
