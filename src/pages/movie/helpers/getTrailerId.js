export const getTrailerId = (videos) => {
  if (!Array.isArray(videos) || videos.length === 0) {
    return undefined;
  }

  // Busca primero trailers doblados y subtitulados
  const prioritizedTrailers = [
    "tráiler [doblado]",
    "tráiler oficial [doblado]",
    "tráiler oficial [subtitulado]",
    "tráiler doblado",
    "tráiler subtitulado",
  ];

  for (const trailerName of prioritizedTrailers) {
    const trailer = videos.find((video) =>
      video.name.toLowerCase().includes(trailerName),
    );
    if (trailer) {
      return trailer.key;
    }
  }

  // Si no se encuentra ningún trailer prioritario, busca cualquier trailer
  const officialTrailer = videos.find(
    (video) =>
      video.name.toLowerCase().includes("tráiler") ||
      video.name.toLowerCase().includes("official trailer"),
  );

  return officialTrailer?.key;
};
