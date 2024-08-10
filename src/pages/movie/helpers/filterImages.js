export const filterImages = (images) => {
  return images.filter(({ iso_639_1 }) => iso_639_1 === null);
};
