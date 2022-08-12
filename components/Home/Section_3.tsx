import React from "react";
import CardShuffle from "./3D/CardShuffle";

export default function Section_3() {
  return (
    <div className="flex flex-col rounded-xl mt-0 md:-mt-28 -mb-52 md:-mb-72 h-[90vh]">
      <div className="text-center -mb-32">
        <h1 className="text-3xl md:text-5xl text-white">Evolution of Perpetual Swaps</h1>
      </div>
      <div className="w-full flex max-h-full h-full items-center justify-center">
        <div className="z-10 max-w-6xl h-full w-full">
          <CardShuffle />
        </div>
      </div>
    </div>
  );
}