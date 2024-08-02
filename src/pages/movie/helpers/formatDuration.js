export const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const readableDuration = `${hours} hora${hours !== 1 ? "s" : ""} ${remainingMinutes} minuto${remainingMinutes !== 1 ? "s" : ""}`;

  return readableDuration;
};
