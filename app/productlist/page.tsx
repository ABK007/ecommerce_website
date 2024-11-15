import Link from "next/link";
import React from "react";
import ProductCard from "../components/productCard/productCard";
import Navbar from "../components/navbar/navbar";

function productlist() {
  return (
    <main>
      
        <Navbar></Navbar>
        <h1 className="text-2xl font-bold p-4">Fetch Products from API</h1>

        <ProductCard />

        <Link href={"/"} className="text-xl font-semibold p-4 underline">
          Go to home page
        </Link>
      
    </main>
  );
}

export default productlist;
