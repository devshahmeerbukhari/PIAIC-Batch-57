// import { getServerSideProps, getStaticProps } from "next/dist/build/templates/pages";

// getServerSideProps
// getStaticProps

const getPostData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache:'no-store'
  })
  const data = await response.json();
  return data;
}

export default async function Home() {
  const postData = await getPostData();
  console.log("Post Data: ", postData)
  return (
    <>
      <div className="text-center p-5 bg-slate-400 font-bold">
        Static Site Generation with Next Js
      </div>
      <div>
        {postData.map((post:any) => {
          return <div key={post.id} className="flex mt-5">
            <h1 className="mx-3 font-bold">Title: </h1>
            <p>{post.title}</p>
          </div>
        })}
      </div>
    </>
  );
}