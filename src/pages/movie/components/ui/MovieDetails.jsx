import { useMemo } from "react";

import {
  formatCurrency,
  getCast,
  getDirector,
  getLanguageNameInSpanish,
  getMovieStatusLabel,
  getProductionCompanyNames,
} from "../../helpers";
import { useGetMovieCreditsQuery } from "../../../../store/api/tmdbApi";

export const MovieDetails = ({
  id,
  original_title,
  original_language,
  production_companies = [],
  budget,
  revenue,
  status,
}) => {
  const { data = {} } = useGetMovieCreditsQuery(id, {
    skip: !id,
  });
  const { crew = [], cast = [] } = data;

  const languageName = useMemo(
    () => getLanguageNameInSpanish(original_language),
    [original_language],
  );

  return (
    <div className="col-span-3">
      <ul className="text-slate-400">
        <li className="my-2">
          <b className="block text-white">Título original</b>
          {original_title}
        </li>
        {crew && (
          <li className="my-2">
            <b className="block text-white">Director</b>
            {getDirector(crew)}
          </li>
        )}
        {cast && (
          <li className="my-2">
            <b className="block text-white">Elenco</b>
            <span className="line-clamp-3">{getCast(cast)}</span>
          </li>
        )}
        {production_companies.length > 0 && (
          <li className="my-2">
            <b className="block text-white">Productoras</b>
            <span className="line-clamp-3">
              {getProductionCompanyNames(production_companies)}
            </span>
          </li>
        )}
        {budget > 0 && (
          <li className="my-2">
            <b className="block text-white">Presupuesto</b>
            {formatCurrency(budget)}
          </li>
        )}
        {revenue > 0 && (
          <li className="my-2">
            <b className="block text-white">Ganancia</b>
            {formatCurrency(revenue)}
          </li>
        )}
        <li className="my-2">
          <b className="block text-white">Estado</b>
          {getMovieStatusLabel(status)}
        </li>
        {original_language && (
          <li className="my-2">
            <b className="block text-white">Idioma original</b>
            {languageName}
          </li>
        )}
      </ul>
    </div>
  );
};
