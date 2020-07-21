import {combineReducers} from "redux";
import {reducer as offers} from "./offers/reducer.js";
import {reducer as cities} from "./cities/reducer.js";
import {reducer as reviews} from "./reviews/reviews.js";
import {reducer as nearby} from "./nearby/reducer.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.CITIES]: cities,
  [NameSpace.REVIEWS]: reviews,
  [NameSpace.NEARBY]: nearby,
});
