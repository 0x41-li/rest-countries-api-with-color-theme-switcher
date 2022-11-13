import { createContext, useEffect, useState } from "react";

import { getCookie, setCookie } from "../helpers/cookies";

export const CountriesContext = createContext({});

export const CountriesContextProvider = (props) => {
  const [countriesData, setCountriesData] = useState(
    JSON.parse(localStorage.getItem("countries_data")) ?? []
  );
  const [searchFilter, setSearchFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const [countriesDataFiltered, setCountriesDataFiltered] =
    useState(countriesData);

  const [showNumber, setShowNumber] = useState(8);

  useEffect(() => {
    const cacheCountriesDataCookieExistenceBool = getCookie(
      "cacheCountriesDataTime"
    )
      ? true
      : false;

    // fetch if there's no countries data in local storage
    // or if the cacheCountriesDataTime cookie has expired
    if (countriesData.length === 0 || !cacheCountriesDataCookieExistenceBool) {
      const fetchCountries = async () => {
        const resp = await fetch("https://restcountries.com/v3.1/all");
        const respJson = await resp.json();

        setCountriesData(respJson);

        localStorage.setItem("countries_data", JSON.stringify(respJson));

        setCookie("cacheCountriesDataTime", "week", { "max-age": 24 * 3600 });
      };

      fetchCountries();
    }

    // search and region filters
    if (regionFilter !== "" || searchFilter !== "") {
      const filterData = countriesData.filter((country) => {
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
        } else {
          return country.region.toLowerCase() === regionFilter.toLowerCase();
        }
      });
      setCountriesDataFiltered(
        filterData.length === 0
          ? "Sorry, no results was found"
          : filterData.slice(0, showNumber)
      );
    } else {
      setCountriesDataFiltered(countriesData.slice(0, showNumber));
    }
  }, [countriesData, searchFilter, regionFilter, showNumber]);

  const loadMore = () => setShowNumber((prev) => prev + 8);
  const resetNumberShow = () => setShowNumber(8);

  return (
    <CountriesContext.Provider
      value={{
        setSearchFilter,
        setRegionFilter,
        countriesDataFiltered,
        countriesData,
        loadMore,
        resetNumberShow,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
