import React from "react";

export const EventSummary = () => {
  return (
    <div>
      <div className="w-full lg:w-[50%] flex flex-col gap-4 ">
        <div className="text-sm lg:text-xl text-zinc-300 leading-relaxed">
          Bulan Ramadhan tak lama lagi datang. <br />
          Alangkah malang diri kita jika bulan yang penuh berkah ini berlalu
          begitu saja tanpa curahan ampunan dan pahala dari-Nya.
        </div>
        <div className="text-sm lg:text-xl text-zinc-300 leading-relaxed">
          Semoga Allah mempertemukan kita dengan bulan yang mulia ini,
          melarutkan kita dalam kelezatan beribadah dan bermunajat kepada-Nya,
          menangisi dosa dan kesalahan kita. <br />
          <br />
          Ya Allah Ya Rabbi, pertemukanlah kami dengannya. Maka persiapkanlah
          diri ini dengan sabaik-baik persiapan menyambutnya agar
          <span className="font-bold"> #ramadhanlebihbaik</span>
        </div>
        <div className="h-16 lg:h-[120px]"></div>
      </div>
      <div className="grid lg:grid-cols-3 justify-items-center w-full gap-6">
        <div className="flex lg:items-center lg:justify-center bg-zinc-900 p-4 lg:p-8 rounded-xl w-full">
          <div>
            <div className="h-28"></div>
            <div className="font-bold text-base lg:text-2xl">
              Mulai dari mana dulu biar konsisten
            </div>
            <div className="italic">Ustadz Farid Ramdhan</div>
          </div>
        </div>
        <div className="flex lg:items-center lg:justify-center bg-zinc-900 p-4 lg:p-8 rounded-xl w-full">
          <div>
            <div className="h-28"></div>

            <div className="font-bold text-base lg:text-2xl">
              Anak muda konsisten berkarya sesuai syariat
            </div>
            <div className="italic">Ustadz Hary Sadikin</div>
          </div>
        </div>
        <div className="flex lg:items-center lg:justify-center bg-zinc-900 p-4 lg:p-8 rounded-xl w-full">
          <div>
            <div className="h-28"></div>

            <div className="font-bold text-base lg:text-2xl">
              Agar Ramadhan tahun ini lebih baik
            </div>
            <div className="italic">Ustadz Fulan</div>
          </div>
        </div>
      </div>
    </div>
  );
};
