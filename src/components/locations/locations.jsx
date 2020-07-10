import React from "react";

const Locations = (props) => {
  const {cities, activeCity, onCityNameClick} = props;

  const handleCityClick = (evt, city) => {
    evt.preventDefault();
    onCityNameClick(city);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => {
          return (
            <li className="locations__item" key={city}>
              <a className={`locations__item-link tabs__item ${city === activeCity ? `tabs__item--active` : ``}`}
                href="#"
                onClick={(evt)=>(handleCityClick(evt, city))}
              >
                <span>{city}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  );
};

export default Locations;
