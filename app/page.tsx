import { TextField } from "@mui/material";
import HotelComponent from "./components/HotelComponent";
import Hotel from "./components/types";
import Slider from "@mui/material/Slider";
import Image from "next/image";
import footerImage from "./images/photo.png";

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

  return (
    <div className="flex w-full h-full flex-col">
      <div className="text-center flex flex-col justify-center align-middle">
        <p>Breadcrumbs</p>
        <h1>Ellada</h1>
        <p>paketa-prosfores</p>
      </div>
      <div className="flex items-start self-stretch gap-[24px] px-[10%]">
        <div className="w-[60%] h-full bg-[#f2fbfd]">
          <h1>Φίλτρα</h1>
          <h1>Εύρος Τιμής</h1>
          <div className="flex">
            <div>
              <label>Apo</label>
              <TextField placeholder="$$"></TextField>
            </div>
            <label>Apo</label>
            <TextField placeholder="$$"></TextField>
          </div>
          <div className="flex  rotate-180 gap-[3px] ">
            {hotels.map((h) => (
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
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </div>
        <div>
          <div className="flex justify-between pb-6">
            <p>{hotels.length} διαθέσιμα πακέτα διακοπών</p>
            <input placeholder="sort" />
          </div>
          <div className="flex flex-wrap justify-between  h-[2150px]">
            {hotels.map((h) => (
              <HotelComponent key={h.name} hotel={h} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-16">
        <Image src={footerImage} alt="footer image" />
      </div>
    </div>
  );
}
