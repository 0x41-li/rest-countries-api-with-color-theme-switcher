import React, { useContext } from "react";

// contexts
import PageContext from "../contexts/PageContext";

const CountryBox = (props) => {
  const { setPageInfo } = useContext(PageContext);

  const countryInfo = props.countryInfo;
  const countryFlag = countryInfo.flags.png;
  const countryName = countryInfo.name;
  const countryPopulation = countryInfo.population;
  const countryRegion = countryInfo.region;
  const countryCapital = countryInfo.capital;

  const styles = {
    backgroundImage: `url(${countryFlag})`,
  };

  function handleClick() {
    setPageInfo({ page: "country", countryName: countryName.common });
  }

  return (
    <div className="country-box" role="button" onClick={handleClick}>
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
