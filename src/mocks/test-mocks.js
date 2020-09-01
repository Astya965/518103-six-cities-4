import {CITIES, SortType} from "../utils/constants.js";

export const testOffers = [
  {
    id: `1`,
    isPremium: true,
    isFavourite: true,
    previewImage: `img/apartment-01.jpg`,
    price: 55,
    rating: 4.8,
    type: `Apartment`,
    title: `Test name-1`,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    bedrooms: 2,
    maxAdults: 3,
    goods: [`Heating`, `Kitchen`, `Frigde`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-max.jpg`,
      id: `host-1`,
      isPro: true,
      name: `Maximum`,
    },
    description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`, `The building is green and from 18th century.`],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    },
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      },
      name: `Amsterdam`
    }
  },
  {
    id: `2`,
    isPremium: false,
    isFavourite: false,
    previewImage: `img/apartment-02.jpg`,
    price: 250,
    rating: 2,
    type: `Room`,
    title: `Test name-2`,
    images: [`img/apartment-02.jpg`],
    bedrooms: 1,
    maxAdults: 1,
    goods: [`Heating`, `Kitchen`, `Frigde`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: `host-3`,
      isPro: false,
      name: `Ellen`,
    },
    description: [`The house itself is surrounded by a gorgeous garden with many hidden lights that make the garden come to life at night.`],
    location: {
      latitude: 52.369553943508,
      longitude: 4.929309666406198,
    },
    city: {
      location: {
        latitude: 52.38333,
        longitude: 4.9,
        zoom: 12
      },
      name: `Amsterdam`
    }
  },
  {
    id: `3`,
    isPremium: true,
    isFavourite: true,
    previewImage: `img/apartment-02.jpg`,
    price: 155,
    rating: 3.2,
    type: `Hotel`,
    title: `Test name-3`,
    images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
    bedrooms: 3,
    maxAdults: 4,
    goods: [`Heating`, `Kitchen`, `Frigde`, `Washing machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-max.jpg`,
      id: `host-1`,
      isPro: true,
      name: `Maximum`,
    },
    description: [`Everything was fantastic. Location is excellent, very friendly staff, cleanliness flawless. I would definitely recommend this hotel to anyone.`],
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
    },
    city: {
      location: {
        latitude: 33.66094,
        longitude: -95.55551,
        zoom: 12
      },
      name: `Paris`,
    }
  },
];

export const testOffer = {
  id: `1`,
  isPremium: true,
  isFavourite: true,
  previewImage: `img/apartment-01.jpg`,
  price: 55,
  rating: 4.8,
  type: `Apartment`,
  title: `Test name-1`,
  images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
  bedrooms: 2,
  maxAdults: 3,
  goods: [`Heating`, `Kitchen`, `Frigde`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    avatarUrl: `img/avatar-max.jpg`,
    id: `host-1`,
    isPro: true,
    name: `Maximum`,
  },
  description: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`, `The building is green and from 18th century.`],
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
  },
  city: {
    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 12
    },
    name: `Amsterdam`
  }
};

export const testReviews = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: 1272402600000,
    id: `1`,
    rating: 5,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: `host-3`,
      isPro: false,
      name: `Leo`,
    }
  },
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: 1472402600000,
    id: `2`,
    rating: 3,
    user: {
      avatarUrl: `img/avatar-max.jpg`,
      id: `host-4`,
      isPro: false,
      name: `Melon`,
    }
  },
  {
    comment: `Didn't like that the bathroom door inside the room is wide open.
    Overall the hotel is really close to the metro/train station and it was clean and comfortable.`,
    date: 1492402600000,
    id: `3`,
    rating: 0,
    user: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: `host-5`,
      isPro: true,
      name: `Su`,
    }
  },
];

export const testReview = {
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: 1272402600000,
  id: `1`,
  rating: 5,
  user: {
    avatarUrl: `img/avatar-max.jpg`,
    id: `host-3`,
    isPro: false,
    name: `Leo`,
  }
};

export const testStore = {
  CITIES: {
    cities: CITIES,
    currentCity: CITIES[0],
  },
  OFFERS: {
    offers: testOffers,
    currentOffer: null,
    currentSort: SortType.DEFAULT,
  },
  REVIEWS: {
    reviews: testReviews
  }
};

export const testStoreWithCurrentOffer = {
  CITIES: {
    cities: CITIES,
    currentCity: CITIES[3],
  },
  OFFERS: {
    offers: testOffers,
    currentOffer: testOffer,
    currentSort: SortType.DEFAULT,
  },
  REVIEWS: {
    reviews: testReviews
  }
};
