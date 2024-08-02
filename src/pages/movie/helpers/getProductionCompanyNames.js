export const getProductionCompanyNames = (companies) => {
  return companies.map(({ name }) => name).join(", ");
};
