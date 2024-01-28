import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col mx-auto text-center">
      <div className="text-3xl text-white">
        Jejaksahabat x Konsisten30Hari x Brightside Street Market
      </div>
      <div className="pt-44 text-xl">Sponsored By</div>
      <div className="mx-autoc">
        <Image
          src="/img/sponsors.png"
          width={500}
          height={500}
          alt="Sponsor Event"
        />
      </div>
    </div>
  );
};
