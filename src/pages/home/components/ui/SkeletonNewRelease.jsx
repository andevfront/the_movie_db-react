import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonNewRelease = () => {
  return (
    <div className="flex gap-2">
      <SkeletonTheme
        baseColor="#1e293b"
        highlightColor="#334155"
        duration={0.5}
      >
        <Skeleton className="h-36 w-24" />
        <div className="w-full">
          <Skeleton className="mb-4 h-5 w-3/6" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-[90%]" />
          <Skeleton className="h-3 w-[70%]" />
          <Skeleton className="h-3 w-[30%]" />
        </div>
      </SkeletonTheme>
    </div>
  );
};
