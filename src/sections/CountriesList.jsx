import React, { useContext } from "react";

// components
import CountryBox from "../components/CountryBox";
import Loader from "../components/Loader";

//  contexts
import CountriesContext from "../contexts/CountriesContext";

const CountriesList = () => {
  const { countriesDataFiltered } = useContext(CountriesContext);

  if (countriesDataFiltered.length === 0) {
    if (Object.keys(countriesDataFiltered).length === 0) {
      return <Loader />;
    }
  }

  if (typeof countriesDataFiltered === "string") {
    return (
      <div className="no-result-container">
        <p className="nrc__para">{countriesDataFiltered}</p>
      </div>
    );
  }

  const countriesBoxesList = countriesDataFiltered.map((country, i) => {
    return <CountryBox countryInfo={country} key={country.name.common} />;
  });

  return <div className="countries-list">{countriesBoxesList}</div>;
};

export default CountriesList;
