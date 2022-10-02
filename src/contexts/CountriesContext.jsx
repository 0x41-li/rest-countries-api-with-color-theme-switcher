import { createContext, useState } from "react";

export const CountriesContext = createContext({});
export const CountriesContextProvider = (props) => {
  const [countries, setCountries] = useState({});

  const fetchCountries = async () => {
    const resp = await fetch("https://restcountries.com/v3.1/all");
    const respJson = await resp.json();
    setCountries(respJson);
  };

  fetchCountries();

  return (
    <CountriesContext.Provider value={countries}>
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
