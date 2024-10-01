import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const getBlogs = async () => {
  return client.fetch(`*[_type == "blog"]`)
}

export default async function Home() {
  const blogs = await getBlogs();
  console.log(blogs);

  return (
    <main>
      <div className="flex justify-center items-center">
        <h1 className="font-bold mt-10 text-lg">Sanity Integration</h1>
      </div>
      <div className="flex gap-5 justify-center mt-10">
        {blogs.map((blog:any)=> (
          <div key={blog._id} className="border rounded-md shadow-lg p-5">
            <Image
              src={urlFor(blog.Image).url()} 
              width={200}
              height={200}
              alt={blog.Title || " Blog Image"}
            />
            <h1>{blog.Title}</h1>
            <p>{blog.Description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
