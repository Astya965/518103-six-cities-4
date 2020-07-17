export const MAX_REVIEWS_COUNT = 10;
export const MAX_NEARBY_OFFERS_COUNT = 3;
export const MAX_IMAGES_COUNT = 6;
export const MAX_CITIES = 6;

export const offerTypesMap = {
  apartment: `Apartment`,
  room: `Private room`,
  house: `House`,
  hotel: `Hotel`
};

export const offerGoodsMap = {
  wifi: `Wi-Fi`,
  washingMachine: `Washing machine`,
  towels: `Towels`,
  heating: `Heating`,
  coffee: `Coffee machine`,
  babySeat: `Baby seat`,
  kitchen: `Kitchen`,
  dishwasher: `Dishwasher`,
  cabelTV: `Cabel TV`,
  fridge: `Fridge`
};

export const ViewMode = {
  Main: 0,
  PlaceDetails: 1
};

export const VIEWMODES = [
  ViewMode.Main,
  ViewMode.PlaceDetails
];

export const CITIES = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`
];

export const SortType = {
  DEFAULT: `popular`,
  TO_HIGH: `to-high`,
  TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

export const SORTS = [
  {
    type: SortType.DEFAULT,
    text: `Popular`,
  },
  {
    type: SortType.TO_HIGH,
    text: `Price: low to high`,
  },
  {
    type: SortType.TO_LOW,
    text: `Price: high to low`,
  },
  {
    type: SortType.TOP_RATED,
    text: `Top rated first`,
  },
];
