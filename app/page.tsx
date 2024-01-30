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
    <div className="flex flex-col justify-center ">
      <div className="text-center	 flex flex-col justify-center align-middle">
        <p>Breadcrumbs</p>
        <h1>Ellada</h1>
        <p>paketa-prosfores</p>
      </div>
      <div className="flex items-start self-stretch gap-[24px] px-[300px]">
        <div className="w-[312px] h-full bg-red-500">
          <h1>Φίλτρα</h1>
          <h1>Φίλτρα</h1>
        </div>
        <div>
          <p>{hotels.length} διαθέσιμα πακέτα διακοπών</p>
          <div className="flex flex-wrap pb-[24px] justify-between 	 w-[1320px] h-[2150px]">
            {hotels.map((h) => (
              <HotelComponent key={h.name} hotel={h} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
