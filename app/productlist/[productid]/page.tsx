
"use client"
import { Product } from '@/types/types';

import { useEffect, useState,  } from 'react';
import {use} from "react";
import React from 'react'


export default function ProductDetails({params}:{params:{productid: string}}) {
  const id = params.productid;
  const [single_product, setProduct] = useState<Product | null>();
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        console.log("response from API", data);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    }

    if (id) {fetchProduct();}}, [id]);

  if (!single_product) return <p>Loading...</p>;

  return (
    <main>
      <h1 className="text-2xl font-bold">Product Details</h1>
      <div>
        <h2></h2>
        <p>Description:{single_product.title} </p>
        <p></p>
        {/* Add more fields as necessary */}
      </div>
    </main>
  );
}


// export default function ProductDetails({params}:{params:{productid: string}}) {
//   const id = (params as { productid: string }).productid;
//   const [single_product, setProduct] = useState<Product | null>();
//   useEffect(() => {
//     async function fetchProduct() {
//       try {
//         const response = await fetch(`https://dummyjson.com/products/${id}`);
//         const data = await response.json();
//         console.log("response from API", data);
//         setProduct(data);
//       } catch (error) {
//         console.error("Failed to fetch product details:", error);
//       }
//     }

//     if (id) {
//       fetchProduct();
//     }
//   }, [id]);

//   if (!single_product) return <p>Loading...</p>;

//   return (
//     <main>
//       <h1 className="text-2xl font-bold">Product Details</h1>
//       <div>
//         <h2></h2>
//         <p>Description:{single_product.title} </p>
//         <p></p>
//         {/* Add more fields as necessary */}
//       </div>
//     </main>
//   );
// }