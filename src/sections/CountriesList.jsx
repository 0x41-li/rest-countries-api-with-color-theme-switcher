import React, { useContext } from "react";
import CountryBox from "../components/CountryBox";
import Loader from "../components/Loader";

//  context
import CountriesContext from "../contexts/CountriesContext";

const CountriesList = () => {
  const { countriesData, countriesDataFiltered, searchFilter, regionFilter } =
    useContext(CountriesContext);

  if (Object.keys(countriesData).length === 0) {
    return <Loader />;
  }

  const countriesDataChosen =
    countriesDataFiltered.length === 0 ? countriesData : countriesDataFiltered;

  const countriesBoxesList = countriesDataChosen.map((country, i) => {
    if (i < 8 && countriesDataFiltered.length === 0) {
      return <CountryBox countryInfo={country} key={country.name.common} />;
    } else if (countriesDataFiltered.length !== 0) {
      return <CountryBox countryInfo={country} key={country.name.common} />;
    }
  });

  return <div className="countries-list">{countriesBoxesList}</div>;
};

export default CountriesList;
