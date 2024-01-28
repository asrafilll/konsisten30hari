import React from "react";

export const RundownEvent = () => {
  return (
    <>
      <div className="pb-10 w-1/2 mx-auto text-gray-400 text-base lg:text-2xl text-center">
        Rundown Acara
      </div>
      <div className="flex flex-col gap-8 w-1/2 mx-auto">
        <div className="flex justify-between border-b-2 border-zinc-900 pb-5 items-center">
          <div className="font-bold text-xl">Pembukaan Acara</div>
          <div className="text-lg text-zinc-400">08.30 - 09.00</div>
        </div>
        <div className="flex justify-between border-b-2 border-zinc-900 pb-5 items-center">
          <div className="font-bold text-xl">
            Mulai dari mana dulu biar konsisten
            <div className="font-normal text-lg text-zinc-500">
              Ustadz Farid Ramdhan
            </div>
          </div>
          <div className="text-lg text-zinc-400">08.30 - 09.00</div>
        </div>
        <div className="flex justify-between border-b-2 border-zinc-900 pb-5 items-center">
          <div className="font-bold text-xl">
            Anak muda konsisten berkarya sesuai syariat
            <div className="font-normal text-lg text-zinc-500">
              Ustadz Hary Sadikin
            </div>
          </div>
          <div className="text-lg text-zinc-400">09.50 - 10.40</div>
        </div>
        <div className="flex justify-between border-b-2 border-zinc-900 pb-5 items-center">
          <div className="font-bold text-xl">
            Tanya Jawab <br />
            Bersama Asatidz
          </div>
          <div className="text-lg text-zinc-400">12.30 - 13.40</div>
        </div>
        <div className="flex justify-between border-b-2 border-zinc-900 pb-5 items-center">
          <div className="font-bold text-xl">
            Konsisten dalam berbisnis
            <div className="font-normal text-lg text-zinc-500">
              Kang risaldi (Founder Smith)
            </div>
          </div>
          <div className="text-lg text-zinc-400">14.00 - 14.50</div>
        </div>
        <div className="flex justify-between border-b-2 border-zinc-900 pb-5 items-center">
          <div className="font-bold text-xl">
            Sharing-sharing dan <br />
            ngopi bareng ustadz
          </div>
          <div className="text-lg text-zinc-400">14.50 - 15.20</div>
        </div>
        <div className="flex justify-between border-b-2 border-zinc-900 pb-5 items-center">
          <div className="font-bold text-xl">
            Agar Ramadhan tahun ini lebih baik
            <div className="font-normal text-lg text-zinc-500">
              Ustadz Fulan
            </div>
          </div>
          <div className="text-lg text-zinc-400">15.30 - 16.20</div>
        </div>
        <div className="flex justify-between border-b-2 border-zinc-900 pb-5 items-center">
          <div className="font-bold text-xl">Penutupan Acara</div>
          <div className="text-lg text-zinc-400">16.20 - Selesai</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-1/2 mx-auto pt-20 text-center">
        <div className="pb-4 w-1/2 mx-auto text-gray-400 text-2xl">
          Benefit (In syaa Allah)
        </div>
        <div className="mx-auto text-gray-200">
          Free goody bag exclusive untuk 50 pendaftar pertama
        </div>
        <div className="mx-auto text-gray-200">
          Bekal menyambut ramadhan agar lebih baik
        </div>
        <div className="mx-auto text-gray-200">
          Teman-teman baru yang positif
        </div>
      </div>
    </>
  );
};
