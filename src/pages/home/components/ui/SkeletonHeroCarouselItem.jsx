import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonHeroCarouselItem = () => {
  return (
    <section className="relative h-[750px] w-full after:absolute after:inset-0 after:h-full after:w-full after:bg-[linear-gradient(to_bottom,_rgba(8,_15,_40,_0)_0%,_rgba(15,_23,_42,_1)_100%)] after:content-['']">
      <div className="container mx-auto flex h-full items-center px-4 xl:px-8">
        <div className="relative z-[5] grid w-full grid-cols-6 gap-20 lg:grid-cols-12">
          <div className="col-span-full text-slate-400 sm:col-span-6">
            <SkeletonTheme
              baseColor="#1e293b"
              highlightColor="#334155"
              duration={0.5}
            >
              <Skeleton className="h-11 w-[100%] rounded-lg" />
              <Skeleton className="h-6 w-[25%] rounded-lg" />
              <div className="my-4 flex items-center gap-4">
                <Skeleton className="h-7 w-20 rounded-lg" />
                <Skeleton className="h-7 w-20 rounded-lg" />
              </div>
              <Skeleton className="h-4 w-[100%] rounded" />
              <Skeleton className="h-4 w-[80%] rounded" />
              <Skeleton className="h-4 w-[50%] rounded" />
              <Skeleton className="my-4 h-6 w-[150px] rounded" />
              <Skeleton className="my-4 h-[42px] w-[130px] rounded-lg" />
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </section>
  );
};
