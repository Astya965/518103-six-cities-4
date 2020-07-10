import NameSpace from "../name-space.js";

import {MAX_NEARBY_OFFERS_COUNT} from "../../utils/constants.js";

export const getNearby = (state) => (state[NameSpace.NEARBY].nearby.slice(0, MAX_NEARBY_OFFERS_COUNT));
