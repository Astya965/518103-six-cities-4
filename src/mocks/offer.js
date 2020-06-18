import shortid from "shortid";
import {getRandomNumber, getRandomElement, getRandomBoolean} from "../utils/utils.js";
import {offerTypesMap} from "../utils/constants.js";

const OFFERS_COUNT = 4;

const titles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`];

const photos = [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/room.jpg`];

const types = [offerTypesMap.apartment, offerTypesMap.room, offerTypesMap.house, offerTypesMap.hotel];

/**
 * Генерация моков для предложения
 * @return {Object} Данные для предложения
 */
const generateOffer = () => {
  return {
    id: shortid.generate(),
    isPremium: getRandomBoolean(),
    isFavourite: getRandomBoolean(),
    previewImage: getRandomElement(photos),
    price: getRandomNumber(10, 300),
    rating: getRandomNumber(0, 5),
    type: getRandomElement(types),
    title: getRandomElement(titles),
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
