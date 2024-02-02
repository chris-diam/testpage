"use client";
import React, { useState, useEffect } from "react";
import { Link, TextField } from "@mui/material";
import Hotel from "./types";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HotelProps {
  hotel: Hotel;
}

const TopSection: React.FC = () => {
  return (
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

      <div className="flex justify-center  md:hidden w-full pt-4 mb-[-120px]">
        <button className="flex justify-between w-[220px] bg-white rounded-3xl  border-solid border text-[#555563]">
          <div className="flex flex-col h-10 pt-1 pl-1">
            <b className="text-[10px] ">ΠΕΛΛΟΠΟΝΝΗΣΟΣ </b>
            <p className="text-[10px]">03/08/2023 - 08/08/2023</p>
          </div>
          <FontAwesomeIcon icon={faEdit} className="pt-3 pr-4 text-[#009649]" />
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
  );
};

export default TopSection;
