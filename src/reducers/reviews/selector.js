import NameSpace from "../name-space.js";

import {MAX_REVIEWS_COUNT} from "../../utils/constants.js";

export const getReviews = (state) => (state[NameSpace.REVIEWS].reviews.slice(0, MAX_REVIEWS_COUNT));
