import React from "react";
import PropTypes from "prop-types";

import {SORTS} from "../../utils/constants.js";

const PlacesSort = (props) => {
  const {isActive: isOpened, onActiveChange: onSortClick} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onSortClick}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom
        ${isOpened ? `places__options--opened` : ``}`}>
        {SORTS.map((option, i) => {
          return (
            <li className={`places__option ${i === 0 ? `places__option--active` : ``}`}
              tabIndex="0" key={option.type}>
              {option.text}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

PlacesSort.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onActiveChange: PropTypes.func.isRequired,
};

export default PlacesSort;
