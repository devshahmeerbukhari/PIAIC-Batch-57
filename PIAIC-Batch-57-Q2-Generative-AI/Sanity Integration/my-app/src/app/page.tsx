import { client } from "@/sanity/lib/client";


const getBlogs = async () => {
  return await client.fetch(`*[_type == "Blog"]`);
}
export default async function Home() {
  const blogs = await getBlogs()
  console.log("Blogss: ", blogs)
  return (
    <div className="flex justify-center font-bold p-5 bg-slate-400">
      Sanity Integration Practice
    </div>
  );
}
