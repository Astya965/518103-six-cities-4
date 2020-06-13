import shortid from "shortid";
import {getRandomElement} from "../utils/utils.js";

const OFFERS_COUNT = 4;

const PLACE_TITLES = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`];

/**
 * Генерация моков для предложения
 * @return {Object} Данные для предложения
 */
const generateOffer = () => {
  return {
    id: shortid.generate(),
    title: getRandomElement(PLACE_TITLES),
  };
};

/**
 * Генерация массива предложений
 * @param {Number} count - Нужное число точек
 * @return {Array} Массив предложений
 */
const generateOffers = (count) => {
  return new Array(count)
  .fill(null)
  .map(generateOffer);
};

export const offers = generateOffers(OFFERS_COUNT);
