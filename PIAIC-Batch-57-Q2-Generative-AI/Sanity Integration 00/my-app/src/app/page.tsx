import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const getHotels = async () =>{
  return await client.fetch(`*[_type == "Hotels"]`);
}
export default async function Home() {
  const hotels = await getHotels();
  return (
    <>
      <div className="flex justify-center p-5 font-bold bg-slate-400">
        Sanity Integration 00
      </div>
      <div className="grid grid-cols-3 gap-5 m-5">
        {hotels.map((hotel:any) => (
          <div key={hotel._id} className="border rounded-md shadow-lg p-5 mt-4">
            <Image
              src={urlFor(hotel.Image).url()} 
              width={600}
              height={300}
              alt={hotel.Title || " Hotel Image"}
            />
            <div className="mt-5">
              <h1><b>Name:</b> {hotel.Name}</h1>
              <p><b>Address:</b> {hotel.Address}</p>
              <p><b>Phone:</b> {hotel.Phone}</p>
              <button className="mt-5 border rounded-full px-5 py-3 bg-blue-600 hover:bg-blue-900 text-white">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
