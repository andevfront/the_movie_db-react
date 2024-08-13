import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export const SwiperNavigationButtons = () => (
  <div className="mt-4 flex items-center justify-between">
    <button className="swiper-button-prev inline-flex cursor-pointer items-center gap-2 rounded-lg border border-sky-500 bg-slate-800/50 px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-slate-800/80">
      <FiArrowLeft className="h-4 w-4" /> Anterior
    </button>
    <button className="swiper-button-next inline-flex cursor-pointer items-center gap-2 rounded-lg border border-sky-500 bg-slate-800/50 px-4 py-2 font-medium text-white transition-all duration-300 hover:bg-slate-800/80">
      Siguiente <FiArrowRight className="h-4 w-4" />
    </button>
  </div>
);
