export const filterUnicObjInArray = arr =>
  arr.filter(({ id }, index, a) => a.findIndex(e => id === e.id) === index);
