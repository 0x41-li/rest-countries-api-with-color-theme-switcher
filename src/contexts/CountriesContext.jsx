import { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext({});

export const CountriesContextProvider = (props) => {
  const savedCountriesAsString =
    localStorage.getItem("countries_data") ?? undefined;

  const savedCountriesAsJson = savedCountriesAsString
    ? JSON.parse(savedCountriesAsString)
    : {};

  const [countriesData, setCountries] = useState(savedCountriesAsJson);
  const [countriesDataFiltered, setCountriesDataFiltered] = useState("");

  useEffect(() => {
    if (savedCountriesAsString === undefined) {
      const fetchCountries = async () => {
        const resp = await fetch("https://restcountries.com/v3.1/all");
        const respJson = await resp.json();
        setCountries(respJson);
      };

      fetchCountries();
    }

    localStorage.setItem("countries_data", JSON.stringify(countriesData));
  }, [countriesData]);

  function updateCountriesData(data) {
    setCountries(data);
  }

  return (
    <CountriesContext.Provider
      value={{
        countriesData,
        updateCountriesData,
        countriesDataFiltered,
        setCountriesDataFiltered,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
