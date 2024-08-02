export const getCast = (cast) => {
  return cast.map(({ original_name }) => original_name).join(", ");
};
