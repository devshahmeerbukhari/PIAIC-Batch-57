import PostBlog from "./PostBlogs/page";

const getPostData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()
  return data;
}
export default async function Home() {
  const postData = await getPostData()
  console.log(postData)
  return (
    <>
      <div className="text-center p-5 bg-slate-400 font-bold">
        Blog Website by Static Site Genertaion
      </div>
      <div className="grid grid-cols-5">
        {postData.map((post:any) => {
          return <PostBlog key={post.id} title={post.title} body={post.body}/>
        })}
      </div>
    </>
  );
}
