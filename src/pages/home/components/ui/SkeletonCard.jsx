import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonCard = () => {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3">
      <SkeletonTheme
        baseColor="#1e293b"
        highlightColor="#334155"
        duration={0.5}
      >
        <Skeleton className="h-[500px] w-full overflow-hidden rounded-lg sm:h-[450px] md:h-[267px] lg:h-[350px]" />
      </SkeletonTheme>
    </div>
  );
};
