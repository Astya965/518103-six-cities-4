import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

import {MAX_NEARBY_OFFERS_COUNT} from "../../utils/constants.js";

const getAllNearby = (state) => (state[NameSpace.REVIEWS].reviews);

export const getNearby = createSelector(
  getAllNearby,
  (nearby) => {
    return nearby.slice(0, MAX_NEARBY_OFFERS_COUNT);
  }
);
