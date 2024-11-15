"use client";
import React from "react";
import { Product } from "../../../types/types";
import { useState, useEffect } from "react";
import Image from "next/image";
import PdpButton from "../pdpButton/pdpbutton";


// client side api calling
function productCard() {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();
      setProducts(data.products); // Corrected typo
      console.log(product);
    }
    fetchData();
  });
  return (
    <main className="grid grid-cols-4 w-fit ">
      {product.map((item: Product) => (
        <div key={item.id} className="">
          <div className="border-[1px] flex flex-col items-center m-3 p-4 h-[26rem] shadow-lg">
            <Image
              src={item.images[0]}
              alt=""
              width="250"
              height="250"
              className="w-48 h-48 object-contain"
            ></Image>
            <div className="flex flex-col items-center">
              <h2 className="font-semibold text-2xl text-center text-slate-600">
                {item.title}
              </h2>
              <h2 className="mt-2 font-bold text-3xl text-slate-900">
                ${item.price}
              </h2>
              <h2 className="mt-2 font-bold text-lg text-slate-600">
                {item.category}
              </h2>
              <PdpButton id={item.id}/>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default productCard;

/////////////////////////////////////////////

// Serve Side API Calling
// async function productList(): Promise<Product[]> {
//   let response = await fetch("https://dummyjson.com/products");
//   let data = await response.json();
//   return data.products;
// }

// async function productCard() {
//   let products = await productList();
//   console.log(products);
//   return (
//     <main className="grid grid-cols-4 w-fit ">
//       {products.map((item: Product) => (
//         <div key={item.id} className="">
//           <div className="border-[1px] flex flex-col items-center m-3 p-4 h-[24rem] shadow-lg">
//             <Image
//               src={item.images[0]}
//               alt=""
//               width="250"
//               height="250"
//               className="w-48 h-48 object-contain"
//             ></Image>
//             <div className="flex flex-col items-center">
//               <h2 className="font-semibold text-2xl text-center text-slate-600">
//                 {item.title}
//               </h2>
//               <h2 className="mt-2 font-bold text-3xl text-slate-900">
//                 ${item.price}
//               </h2>
//               <h2 className="mt-2 font-bold text-lg text-slate-600">
//                 {item.category}
//               </h2>
//             </div>
//           </div>
//         </div>
//       ))}
//     </main>
//   );
// }

// export default productCard;
