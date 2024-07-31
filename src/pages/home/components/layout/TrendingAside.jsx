import { useState } from "react";

import { TrendingMovies } from "../ui/TrendingMovies";

export const TrendingAside = () => {
  const [selectedOption, setSelectedOption] = useState("day");

  return (
    <div className="col-span-12 xl:col-span-4">
      <h1 className="mb-8 text-2xl font-bold">Tendencias</h1>
      <ul className="mb-6 flex">
        <li className="w-1/2">
          <button
            className={`${selectedOption === "day" ? "border-b border-cyan-500 font-bold" : ""} w-full pb-3`}
            onClick={() => setSelectedOption("day")}
          >
            Día
          </button>
        </li>
        <li className="w-1/2">
          <button
            className={`${selectedOption === "week" ? "border-b border-cyan-500 font-bold" : ""} w-full pb-3`}
            onClick={() => setSelectedOption("week")}
          >
            Semana
          </button>
        </li>
      </ul>

      <TrendingMovies timeFrame={selectedOption} />
    </div>
  );
};
