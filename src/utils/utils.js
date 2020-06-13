/**
 * Выбор случайного элемента массива
 * @param {Array} array
 * @return {Any} Случайный элемент массива
 */
export const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * (array.length));
  return array[randomIndex];
};
