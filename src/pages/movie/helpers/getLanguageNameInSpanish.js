import ISO6391 from "iso-639-1";

const languageMap = {
  English: "Inglés",
  Spanish: "Español",
  French: "Francés",
  German: "Alemán",
  Italian: "Italiano",
  Portuguese: "Portugués",
  Russian: "Ruso",
  Japanese: "Japonés",
  Korean: "Coreano",
  Chinese: "Chino",
  Arabic: "Árabe",
  Bengali: "Bengalí",
  Bulgarian: "Búlgaro",
  Catalan: "Catalán",
  Czech: "Checo",
  Danish: "Danés",
  Dutch: "Holandés",
  Estonian: "Estonio",
  Finnish: "Finlandés",
  Greek: "Griego",
  Hebrew: "Hebreo",
  Hindi: "Hindi",
  Hungarian: "Húngaro",
  Indonesian: "Indonesio",
  Latvian: "Letón",
  Lithuanian: "Lituano",
  Malay: "Malayo",
  Norwegian: "Noruego",
  Persian: "Persa",
  Polish: "Polaco",
  Romanian: "Rumano",
  Serbian: "Serbio",
  Slovak: "Eslovaco",
  Slovenian: "Esloveno",
  Swedish: "Sueco",
  Thai: "Tailandés",
  Turkish: "Turco",
  Ukrainian: "Ucraniano",
  Urdu: "Urdu",
  Vietnamese: "Vietnamita",
};

export const getLanguageNameInSpanish = (code) => {
  const nameInEnglish = ISO6391.getName(code);
  return languageMap[nameInEnglish] || "Idioma desconocido";
};
