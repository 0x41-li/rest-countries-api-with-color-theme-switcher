import React, { useContext } from "react";

// contexts
import ThemeContext from "../contexts/ThemeContext";

// sections
import FilterAndSearch from "../sections/FilterAndSearch";
import CountriesList from "../sections/CountriesList";

const CountriesPage = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <main data-dark-theme={isDarkTheme}>
      <div className="container">
        <FilterAndSearch />
        <CountriesList />
      </div>
    </main>
  );
};

export default CountriesPage;
