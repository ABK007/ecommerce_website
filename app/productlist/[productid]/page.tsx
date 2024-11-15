import Navbar from "@/app/components/navbar/navbar";
import React from "react";
import Image from "next/image";
import Button from "@/app/components/button/button";

async function fetchProduct(id: string) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    console.log("response from API", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch product details:", error);
  }
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productid: string }>;
}) {
  const id = (await params).productid;
  const single_product = await fetchProduct(id);

  if (!single_product) return <p>Loading...</p>;

  return (
    <main>
      <Navbar />
      <div className="m-10">
        <h1 className="text-4xl font-bold text-center mt-14">
          Product Details
        </h1>
        <div className="flex shadow-lg m-10 p-10 gap-10">
          <div className="w-[50vw]">
            <Image
              src={single_product.images[0]}
              alt=""
              width={500}
              height={500}
              className="w-96 h-96 object-fill"
            ></Image>
          </div>
          <div className="flex flex-col gap-2 w-[80vw]">
            <h2 className="text-4xl font-bold text-left w-fit">{single_product.title}</h2>
            <h2 className="text-2xl font-bold text-left mt-5 w-fit">${single_product.price}</h2>
            <h3 className="text-lg font-medium text-left">Category: {single_product.category}</h3>
            <h3 className="mt-6 text-lg font-medium text-left">Description: </h3>
            <p className="text-lg font-semibold mr-8 pb-4">{single_product.description}</p>
            <Button icon="yes" text="Add To Cart" url="/addtocart" />
          </div>
        </div>
      </div>
    </main>
  );
}
