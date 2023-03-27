export const number2precision = (v, precision = 4) => {
  if (!v) return '';
  return Number(parseFloat((+v).toPrecision(12)).toFixed(precision));
};
