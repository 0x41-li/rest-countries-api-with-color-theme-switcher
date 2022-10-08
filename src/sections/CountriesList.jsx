import React, { useContext } from "react";
import CountryBox from "../components/CountryBox";
import Loader from "../components/Loader";

//  context
import CountriesContext from "../contexts/CountriesContext";

const CountriesList = () => {
  const countriesJsonInfo = useContext(CountriesContext);

  if (Object.keys(countriesJsonInfo).length === 0) {
    return <Loader />;
  }

  const countriesBoxesList = Object.entries(countriesJsonInfo).map(
    (country) => {
      if (parseInt(country[0]) < 8) {
        return (
          <CountryBox countryInfo={country[1]} key={country[1].name.common} />
        );
      }
    }
  );

  return <div className="countries-list">{countriesBoxesList}</div>;
};

export default CountriesList;
