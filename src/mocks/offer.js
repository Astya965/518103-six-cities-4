import shortid from "shortid";
import {getRandomNumber, getRandomElement, getRandomBoolean, shuffleArray} from "../utils/utils.js";
import {offerTypesMap, offerGoodsMap} from "../utils/constants.js";

const OFFERS_COUNT = 4;

const titles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`];

const photos = [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/room.jpg`];

const types = [offerTypesMap.apartment, offerTypesMap.room, offerTypesMap.house, offerTypesMap.hotel];

const descriptions = [
  `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  `From the outside this house looks impressive. It has been built with spruce wood and has yellow pine wooden decorations.`,
  `Small, squared windows brighten up the house and have been added to the house in a fairly symmetrical pattern`,
  `The house is equipped with a large kitchen and two modern bathrooms, it also has a fairly small living room, two bedrooms, a snug dining area, a lounge area and a roomy storage room.`,
  `The house itself is surrounded by a gorgeous garden with many hidden lights that make the garden come to life at night.`
];

const goods = [offerGoodsMap.wifi,
  offerGoodsMap.washingMachine,
  offerGoodsMap.towels,
  offerGoodsMap.heating,
  offerGoodsMap.coffee,
  offerGoodsMap.babySeat,
  offerGoodsMap.kitchen,
  offerGoodsMap.dishwasher,
  offerGoodsMap.cabelTV,
  offerGoodsMap.fridge
];

const names = [`Anna`, `Lina`, `Simon`, `Alice`, `Mary`, `Max`, `Alex`];

const avatars = [`img/avatar-angelina.jpg`, `img/avatar-max.jpg`];

const coordinates = [[52.3909553943508, 4.85309666406198], [52.369553943508, 4.85309666406198], [52.3909553943508, 4.929309666406198], [52.3809553943508, 4.939309666406198]];

const getCoorginates = () => {
  const [latitude, longitude] = getRandomElement(coordinates);
  return {
    latitude,
    longitude
  };
};

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
    images: shuffleArray(photos).slice(getRandomNumber(0, 4)),
    bedrooms: getRandomNumber(1, 5),
    maxAdults: getRandomNumber(1, 10),
    goods: shuffleArray(goods).slice(getRandomNumber(0, 7)),
    host: {
      avatarUrl: getRandomElement(avatars),
      id: `host-${shortid.generate()}`,
      isPro: getRandomBoolean(),
      name: getRandomElement(names),
    },
    description: shuffleArray(descriptions).slice(0, 2),
    location: getCoorginates(),
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      },
      name: `Amsterdam`
    }
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
