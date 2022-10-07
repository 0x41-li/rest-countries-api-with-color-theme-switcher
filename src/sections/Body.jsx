import React, { useContext } from "react";

// contexts
import ThemeContext from "../contexts/ThemeContext";

// sections
import FilterAndSearch from "./FilterAndSearch";

const Body = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <main data-dark-theme={isDarkTheme} style={{height:"2000px"}}>
      <FilterAndSearch />
    </main>
  );
};

export default Body;
