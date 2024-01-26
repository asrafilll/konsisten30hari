import React from "react";

export const MoveUpSVG = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-move-up-right"
    >
      <path d="M13 5H19V11" />
      <path d="M19 5L5 19" />
    </svg>
  );
};