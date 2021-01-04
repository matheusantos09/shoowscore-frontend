export const convertArrayObjectsInString = (
  array = [],
  target = '',
): string => {
  if (!target) {
    return '';
  }
  const returnResponse: Array<string> = [];

  array.forEach((item) => {
    console.log(item[target]);

    returnResponse.push(item[target]);
  });

  console.log(returnResponse.join(', '));

  return returnResponse.join(', ');
};
