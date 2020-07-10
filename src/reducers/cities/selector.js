import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

import {uniqBy} from "../../utils/utils.js";
import {MAX_CITIES} from "../../utils/constants.js";

export const getCities = (state) => (state[NameSpace.CITIES].cities);
export const getActiveCity = (state) => (state[NameSpace.CITIES].currentCity);
export const getCurrentOffer = (state) => (state[NameSpace.CITIES].currentOffer);
