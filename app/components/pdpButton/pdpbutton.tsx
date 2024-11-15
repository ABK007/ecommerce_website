"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PdpId } from "../../../types/types";

function PdpButton({ id }: PdpId) {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => {
          router.push(`productlist/${id}`);
        }}
        className="font-semibold px-10 py-3 bg-[#212121] text-white flex items-center gap-2 w-fit rounded-md"
      >
        Product Details
      </button>
    </>
  );
}

export default PdpButton;
