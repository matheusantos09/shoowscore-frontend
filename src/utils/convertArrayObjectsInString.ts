export const convertArrayObjectsInString = (
  array = [],
  target = '',
): string => {
  if (!target) {
    return '';
  }
  const returnResponse: Array<string> = [];

  array.forEach((item) => {
    returnResponse.push(item[target]);
  });

  return returnResponse.join(', ');
};
