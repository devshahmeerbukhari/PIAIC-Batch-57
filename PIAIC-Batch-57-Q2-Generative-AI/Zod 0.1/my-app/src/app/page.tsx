'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    getProduct()
  },[])
  const getProduct = async() => {
    const response = await fetch("http://localhost:3000/api/products");
    const data: any = await response.json();
    setProducts(data);
  }
  return (
    <>
      <div className="text-center p-5 bg-slate-400 font-bold">
        Form Validation using Zod 0.1
      </div>
      <div className="flex justify-center mt-10 ">
        {products.length > 0 && (
          products.map((prod:any)=>{
            return <div className="mx-5 border p-5 rounded-md">
              <h1>Name: {prod.name}</h1>
              <p>Price: {prod.price}</p>
            </div>
          })
        )}
        {products.length === 0 && (
          <p className="font-bold">Loading...</p>
        )}
      </div>
    </>
  );
}
