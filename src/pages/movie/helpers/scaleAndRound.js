export const scaleAndRound = (number) => {
  const scaledValue = number / 2;
  const roundedValue = Math.round(scaledValue * 10) / 10;

  return roundedValue;
};
