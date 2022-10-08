import React from "react";

const CountryBox = (props) => {
  const countryFlag = props.countryInfo.flags.png;
  const countryName = props.countryInfo.name;
  const countryPopulation = props.countryInfo.population;
  const countryRegion = props.countryInfo.region;
  const countryCapital = props.countryInfo.capital;

  const styles = {
    backgroundImage: `url(${countryFlag})`,
  };

  return (
    <div className="country-box">
      <div className="country-box__flag" style={styles}></div>
      <div className="country-box__info">
        <h2 className="country-box__h2">{countryName.common}</h2>
        <ul className="country-box__more-info">
          <li>
            <p>
              <strong>Population:</strong> {countryPopulation}
            </p>
          </li>
          <li>
            <p>
              <strong>Region:</strong> {countryRegion}
            </p>
          </li>
          <li>
            <p>
              <strong>Capital:</strong> {countryCapital}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryBox;
