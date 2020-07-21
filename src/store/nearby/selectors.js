import {createSelector} from "reselect";

import {MAX_NEARBY_OFFERS_COUNT} from "../../utils/constants.js";
import {getCurrentOffers} from "../offers/selectors.js";
import {getCurrentOffer} from "../cities/selectors.js";

export const getNearby = createSelector(
    getCurrentOffers,
    getCurrentOffer,
    (offers, offer) => {
      return offers.filter((item) => item.id !== offer.id).slice(0, MAX_NEARBY_OFFERS_COUNT);
    }
);
