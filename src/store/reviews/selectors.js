import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

import {MAX_REVIEWS_COUNT} from "../../utils/constants.js";

const getAllReviews = (state) => (state[NameSpace.REVIEWS].reviews);

export const getReviews = createSelector(
    getAllReviews,
    (reviews) => {
      return reviews.slice(0, MAX_REVIEWS_COUNT);
    }
);
