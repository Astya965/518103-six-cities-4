import {getRandomNumber, getRandomElement, getRandomBoolean} from "../utils/utils.js";
import shortid from "shortid";

const COMMENTS_COUNT = 3;

/**
 * 1000 миллисекунд = 1 секунда
 */
const MIN_DATE = Date.now() - 31556926 * 1000 * 2;


const comments = [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  `Good location next to Amsterdam Zuid and by tram to museumplein 5 min. Nice view from window`,
  `Didn't like that the bathroom door inside the room is wide open.
  Overall the hotel is really close to the metro/train station and it was clean and comfortable.`,
  `The only problem was to find the place..everything else was great!`,
  `Everything was fantastic. Location is excellent, very friendly staff, cleanliness flawless. I would definitely recommend this hotel to anyone.`,
  `Beautiful cozy, room, this time on the 6th floor, great breakfast as always, exceptional service throughout...`];

/**
 * Генерация случайно даты в промежутке от MIN_DATE до MAX_DATE
 * @return {Number} СЛучайная дата в unix формате
 */
const getRandomDate = () => {
  return getRandomNumber(MIN_DATE, MAX_DATE);
};

/**
 * Генерация моков для отзыва
 * @return {Object} Данные для отзыва
 */
const genrateComment = () => {
  return {
    comment: getRandomElement(comments),
    date: getRandomDate(),
    id: shortid.generate(),
    rating: getRandomNumber(0, 5),
    user: {
      avatarUrl: getRandomElement(avatars),
      id: `host-${shortid.generate()}`,
      isPro: getRandomBoolean(),
      name: getRandomElement(names),
    }
  };
};

/**
 * Генерация массива отзывов
 * @param {Number} count - Нужное число отзывов
 * @return {Array} Массив отзывов
 */
const generateComments = (count) => {
  return new Array(count)
  .fill(null)
  .map(genrateComment);
};

export const reviews = generateComments(COMMENTS_COUNT);
