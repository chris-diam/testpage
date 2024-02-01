import { TextField } from "@mui/material";
import HotelComponent from "./components/HotelComponent";
import Hotel from "./components/types";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import footerImage from "./images/photo.png";
import Grid from "@mui/material/Grid";
import Results from "./components/Results";

async function getHotels(): Promise<Hotel[]> {
  const token = "QcKjgrWuKr0mYaavwwtpSvk7MyWhyWh3k0Secv"; // Replace 'your_bearer_token' with your actual bearer token

  try {
    const res = await fetch("https://aio.server9.nelios.com/", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // Add other headers if needed
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    const hotels = data.data;
    console.log("edw");
    console.log(data.data);
    return hotels;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function Home() {
  const hotels = await getHotels();

  const sortedHotelsByName = hotels
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  const sortedHotelsByPrice = hotels.slice().sort((a, b) => a.price - b.price);

  return (
    <div className="bg">
      <Results hotels={hotels} />;
    </div>
  );
}
