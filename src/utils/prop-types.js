import PropTypes from "prop-types";

export const offerShape = {
  id: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavourite: PropTypes.bool.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
