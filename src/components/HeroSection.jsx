import React from "react";
import { MoveUpSVG } from "./shared/moveupsvg";

export const HeroSection = () => {
  return (
    <>
      <div className="flex justify-between text-slate-200">
        <div className="text-md">Jejak Sahabat</div>
        <div className="text-xl">Brightside Street Market</div>
      </div>
      <div className="w-1/2 mx-auto pt-20 text-center flex flex-col gap-4">
        <div className="font-caveatBrush text-3xl text-slate-200">
          #RamadhanLebihBaik
        </div>
        <div className="font-bold text-9xl tracking-tighter text-white">
          Konsistensi
          <br />
          Anak Muda
        </div>
        <div className="text-2xl">
          Sabtu, 17 Februari 2024
          <br />
          Brighside Street Market, Bandung
        </div>
      </div>
      <div className="text-center pt-8">
        <div className="inline-block py-4 px-8 border-white border-2 rounded-full">
          <div className="flex justify-center items-center gap-4">
            {" "}
            Daftar Sekarang
            <MoveUpSVG width={20} height={20} />
          </div>
        </div>
      </div>
    </>
  );
};
