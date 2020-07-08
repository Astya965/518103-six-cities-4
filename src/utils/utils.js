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
  const randomIndex = getRandomNumber(0, array.length - 1);
  return array[randomIndex];
};

/**
 * Генерация случайного значения true\false
 * @return {Boolean}
 */
export const getRandomBoolean = () => {
  return Boolean(getRandomNumber(0, 1));
};

/**
 * Перемешивание массива (на основе алгоритма Фишера-Йетса)
 * @param {Array} array - Массив, который нужно перемешать
 * @return {Array} Перемешенный массив
 */
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let k = Math.floor(Math.random() * (i + 1));
    let swap = array[k];
    array[k] = array[i];
    array[i] = swap;
  }

  return array;
};

/**
 * Перевод рейтинга из оценки от 0 до 5 в проценты
 * @param {Number} rating - Оценка (от 0 до 5, может быть дробным)
 * @return {String} Рейтинг в процентах (от 0 до 100%)
 */
export const getRatingPercentage = (rating) => {
  return `${Math.round(rating) * 20}%`;
};

/**
 * Мемоизация функции
 * @param {func} fn - Функция, которую надо мемоизировать
 * @return {func} Мемоизированная функция
 */
export const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

/**
 * Копирования значений всех собственных перечисляемых свойств исходных объектов (a и b) в целевой объект
 * @param {Object} a - Исходный объект
 * @param {Object} b - Исходный объект
 * @return {Object} Получившийся целевой объект
 */
export const extendObject = (a, b) => Object.assign({}, a, b);
