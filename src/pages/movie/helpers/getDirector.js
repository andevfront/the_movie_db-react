export const getDirector = (crew) => {
  const directors = crew
    .filter(({ job }) => job === "Director")
    .map(({ name }) => name);

  return directors;
};
