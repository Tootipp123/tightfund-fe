export const formatNumber = (val: string) => {
  const num = parseInt(val, 10);
  if (isNaN(num)) return "";
  return new Intl.NumberFormat().format(num);
};
