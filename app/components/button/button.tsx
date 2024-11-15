import React from "react";
import Image from "next/image";
import {ButtonContent} from "../../../types/types";

function Button({text, icon}: ButtonContent) {

  return (
    <>
      <button className="font-semibold px-[60px] py-[18px] bg-[#212121] text-white flex items-center gap-2 w-fit">

        {icon == "yes" ? <Image
          src="/cart-shopping-solid.svg"
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
