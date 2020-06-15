/**
 * Выбор случайного числа в заданном промежутке
 * @param {Number} min - Минимальное допустимое значение (включительно)
 * @param {Number} max - Максимальное допустимое значение (включительно)
 * @return {Number} Случайное целое число в данном промежутке
 */
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Выбор случайного элемента массива
 * @param {Array} array
 * @return {Any} Случайный элемент массива
 */
export const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * (array.length));
  return array[randomIndex];
};

/**
 * Генерация случайного значения true\false
 * @return {Boolean}
 */
export const getRandomBoolean = () => {
  const boolean = (Math.floor(Math.random() < 0.5)) ? true : false;
  return boolean;
};
