import React from "react";
import PropTypes from "prop-types";

const PlaceGallery = (props) => {
  const {images} = props;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image, i) => {
          return (
            <div className="property__image-wrapper" key={`image-${i}`}>
              <img className="property__image" src={image} alt="Offer photo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

PlaceGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PlaceGallery;
