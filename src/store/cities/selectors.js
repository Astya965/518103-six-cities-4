import NameSpace from "../name-space.js";

export const getCities = (state) => (state[NameSpace.CITIES].cities);
export const getCurrentCity = (state) => (state[NameSpace.CITIES].currentCity);
