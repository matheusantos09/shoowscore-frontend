export const formatNumber = (number: number, separator = '.'): string =>
  number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${separator}`);
