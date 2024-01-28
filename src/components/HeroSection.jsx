import React from "react";
import { MoveUpSVG } from "./shared/moveupsvg";

export const HeroSection = () => {
  return (
    <div className="w-full lg:w-1/2 ">
      <div className="flex justify-between text-slate-200">
        <div className="text-sm lg:text-md">Jejak Sahabat</div>
        <div className="text-sm lg:text-md">Brightside Street Market</div>
      </div>
      <div className="mx-auto pt-20 text-center flex flex-col gap-2 lg:gap-4">
        <div className="font-caveatBrush text-xl lg:text-3xl text-slate-200">
          #RamadhanLebihBaik
        </div>
        <div className="font-bold text-6xl lg:text-9xl tracking-tighter text-white">
          Konsistensi
          <br />
          Anak Muda
        </div>
        <div className="text-base lg:text-2xl">
          Sabtu, 17 Februari 2024
          <br />
          Brighside Street Market, Bandung
        </div>
      </div>
      <div className="text-center pt-4 lg:pt-8">
        <div className="inline-block py-3 px-4 lg:py-4 lg:px-8 border-white border-2 rounded-full">
          <div className="flex justify-center items-center gap-1 lg:gap-4 text-xs">
            Daftar Sekarang
            <MoveUpSVG />
          </div>
        </div>
      </div>
    </div>
  );
};
