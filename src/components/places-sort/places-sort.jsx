import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/offers/actions.js";
import {getCurrentSort} from "../../store/offers/selectors.js";

import {SORTS} from "../../utils/constants.js";
import {memoize} from "../../utils/utils.js";

const memorizedSortType = memoize((activeSort) => SORTS.find((sort) => sort.type === activeSort));

const PlacesSort = (props) => {
  const {isActive: isOpened, onActiveChange: onSortClick, currentSort, setCurrentSort} = props;
  const onSortItemClick = (sort) => setCurrentSort(sort);

  const handleSortChange = (option) => () => {
    onSortItemClick(option.type);
    onSortClick();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onSortClick}>
        {memorizedSortType(currentSort).text}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom
        ${isOpened ? `places__options--opened` : ``}`}>
        {SORTS.map((option, i) => {
          return (
            <li className={`places__option ${i === 0 ? `places__option--active` : ``}`}
              tabIndex="0" key={option.type} onClick={handleSortChange(option)}>
              {option.text}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  currentSort: getCurrentSort(state),
});

const mapDispatchToProps = {
  setCurrentSort: ActionCreator.setCurrentSort,
};

PlacesSort.propTypes = {
  isActive: PropTypes.bool.isRequired,
  currentSort: PropTypes.string.isRequired,
  setCurrentSort: PropTypes.func.isRequired,
  onActiveChange: PropTypes.func.isRequired,
};

export {PlacesSort};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesSort);
