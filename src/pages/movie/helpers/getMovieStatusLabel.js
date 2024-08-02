export const getMovieStatusLabel = (status) => {
  switch (status) {
    case "Rumored":
      return "Rumoreada";
    case "Planned":
      return "En Planificación";
    case "In Production":
      return "En Producción";
    case "Post Production":
      return "Post Producción";
    case "Released":
      return "Lanzada";
    case "Cancelled":
      return "Cancelada";
    default:
      return "Estado desconocido";
  }
};
