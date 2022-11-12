import { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext({});

/* TODO: Add a cookie that will expires every 24 hour
when the cookie expires make, request all countries data again
and save it in the local storage
*/

export const CountriesContextProvider = (props) => {
  const [countriesData, setCountriesData] = useState(
    JSON.parse(localStorage.getItem("countries_data")) ?? []
  );
  const [searchFilter, setSearchFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const [countriesDataFiltered, setCountriesDataFiltered] =
    useState(countriesData);

  useEffect(() => {
    // fetch if there's no countries data in local storage
    if (Object.keys(countriesData).length === 0) {
      const fetchCountries = async () => {
        const resp = await fetch("https://restcountries.com/v3.1/all");
        const respJson = await resp.json();

        setCountriesData(respJson);

        localStorage.setItem("countries_data", JSON.stringify(respJson));
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
        filterData.length === 0 ? "Sorry, no results was found" : filterData
      );
    } else {
      setCountriesDataFiltered(countriesData.slice(0, 8));
    }
  }, [countriesData, searchFilter, regionFilter]);

  return (
    <CountriesContext.Provider
      value={{
        setSearchFilter,
        setRegionFilter,
        countriesDataFiltered,
        countriesData,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
