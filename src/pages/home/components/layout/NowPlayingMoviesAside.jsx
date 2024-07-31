import { useGetNowPlayingMoviesQuery } from "../../../../store";
import { NewRelease, SkeletonNewRelease } from "../ui";

export const NowPlayingMoviesAside = () => {
  const { data = {}, isLoading } = useGetNowPlayingMoviesQuery();
  const { results: movies = [] } = data;

  return (
    <div className="col-span-12 xl:col-span-4">
      <h1 className="mb-8 text-2xl font-bold">Top Estrenos</h1>
      <div className="flex flex-col gap-6">
        {isLoading ? (
          <>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <SkeletonNewRelease key={index} />
              ))}
          </>
        ) : (
          <>
            {movies.slice(0, 5).map((movie, index) => (
              <NewRelease key={movie.id} index={index} {...movie} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
