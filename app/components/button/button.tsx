"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {ButtonContent} from "../../../types/types";

function Button({text, icon, url}: ButtonContent) {
  const router = useRouter();

  return (
    <>
      <button onClick={() => {router.push(`${url}`);
        }}
      className="font-semibold px-[60px] py-[18px] bg-[#212121] text-white flex items-center gap-2 w-fit rounded-md">

        {icon == "yes" ? <Image
          src={"/cart-shopping-solid.svg"}
          alt="shopping cart"
          width="16"
          height="16"
        /> : <></>}
        {text}
      </button>
    </>
  );
}

export default Button;
