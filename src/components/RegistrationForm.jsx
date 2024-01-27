import React from "react";
import { MoveUpSVG } from "./shared/moveupsvg";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export const RegistrationForm = () => {
  return (
    <div className="flex justify-between w-4/5 mx-auto items-center">
      <div>
        <div className="flex items-center">
          <div className="text-7xl mr-4">Daftar </div>
          <div className="rounded-full p-4 bg-white">
            <MoveUpSVG width={30} height={30} stroke={"#000000"} />
          </div>
          <br />
        </div>
        <div className="text-7xl">Sekarang </div>
      </div>
      <div className="w-2/5 ">
        <div className="flex flex-col gap-6">
          <Input
            type="text"
            variant="underlined"
            label="Nama Lengkap"
            className="w-full"
          />
          <Input
            type="email"
            variant="underlined"
            label="Email"
            className="w-full"
          />
          <Input
            type="text"
            variant="underlined"
            label="Nomor Handphone"
            className="w-full"
          />
        </div>
        <div className="pt-8">
          <Button radius="sm" size="lg" fullWidth={true}>
            Daftar
          </Button>
        </div>
      </div>
    </div>
  );
};
