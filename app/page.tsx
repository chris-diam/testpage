import HotelComponent from "./components/HotelComponent";
import Hotel from "./components/types";

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
    <div className="flex flex-col align-middle justify-center ">
      <div>
        <p>Breadcrumbs</p>
        <h1>Ellada</h1>
        <p>paketa-prosfores</p>
      </div>
      <div className="flex items-start self-stretch gap-[24px] ">
        <div>filtra</div>
        <div className="flex flex-wrap pb-[24px] align-middle gap-[24px] self-stretch	 w-[1320px] h-[2150px]">
          {hotels.map((h) => (
            <HotelComponent key={h.name} hotel={h} />
          ))}
        </div>
      </div>
    </div>
  );
}
