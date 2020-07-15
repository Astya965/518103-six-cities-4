import NameSpace from "../name-space.js";

export const getCities = (state) => (state[NameSpace.CITIES].cities);
export const getActiveCity = (state) => (state[NameSpace.CITIES].currentCity);
export const getCurrentOffer = (state) => (state[NameSpace.CITIES].currentOffer);
