import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonCard = () => {
  return (
    <div className="col-span-6 sm:col-span-4 md:col-span-3">
      <div className="h-[269px] w-full overflow-hidden rounded-lg sm:h-[304px] md:h-[273px] lg:h-[369px] xl:h-[272px]">
        <SkeletonTheme
          baseColor="#1e293b"
          highlightColor="#334155"
          duration={0.5}
        >
          <Skeleton className="h-full w-full" />
        </SkeletonTheme>
      </div>
    </div>
  );
};
