import React from "react";
import Image from "next/image";

function Button() {
  return (
    <>
      <button className="font-semibold px-[60px] py-[18px] bg-[#212121] text-white flex items-center gap-2">
        <Image
          src="/cart-shopping-solid.svg"
          alt="shopping cart"
          width="16"
          height="16"
        />
        Start Shopping
      </button>
    </>
  );
}

export default Button;
