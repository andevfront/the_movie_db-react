import { PiSmileySadThin } from "react-icons/pi";

export const NoResultsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <PiSmileySadThin className="h-8 w-8" />
      <p className="text-center">No se encontraron resultados</p>
    </div>
  );
};
