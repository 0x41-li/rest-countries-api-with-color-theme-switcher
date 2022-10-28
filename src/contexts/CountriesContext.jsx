import { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext({});

export const CountriesContextProvider = (props) => {
  const savedCountriesDataInLocalStorage =
    localStorage.getItem("countries_data") ?? undefined;

  const savedCountriesDataAsJson = savedCountriesDataInLocalStorage
    ? JSON.parse(savedCountriesDataInLocalStorage)
    : {};

  const [countriesData, setCountries] = useState(savedCountriesDataAsJson);
  const [countriesDataFiltered, setCountriesDataFiltered] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  useEffect(() => {
    if (savedCountriesDataInLocalStorage === undefined) {
      const fetchCountries = async () => {
        const resp = await fetch("https://restcountries.com/v3.1/all");
        const respJson = await resp.json();
        setCountries(respJson);
      };

      fetchCountries();
    }

    if (regionFilter !== "" || searchFilter !== "") {
      setCountriesDataFiltered(
        countriesData.filter((country, i) => {
          if (regionFilter !== "" && searchFilter !== "") {
            return (
              country.name.common
                .toLowerCase()
                .startsWith(searchFilter.toLowerCase()) &&
              country.region.toLowerCase() === regionFilter.toLowerCase()
            );
          } else if (searchFilter !== "") {
            return country.name.common
              .toLowerCase()
              .startsWith(searchFilter.toLowerCase());
          } else if (regionFilter !== "") {
            return country.region.toLowerCase() === regionFilter.toLowerCase();
          }
        })
      );
    }

    localStorage.setItem("countries_data", JSON.stringify(countriesData));
  }, [countriesData, searchFilter, regionFilter]);


  return (
    <CountriesContext.Provider
      value={{
        countriesData,
        countriesDataFiltered,
        setSearchFilter,
        setRegionFilter,
        searchFilter,
        regionFilter,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
