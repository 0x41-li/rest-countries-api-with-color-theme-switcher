import React, { useContext } from "react";

// contexts
import PageContext from "../contexts/PageContext";

// pages
import CountriesPage from "../pages/CountriesPage";
import CountryPage from "../pages/CountryPage";

const PageChooser = () => {
  const { pageInfo } = useContext(PageContext);

  switch (pageInfo.page) {
    case "home":
      return <CountriesPage />;
    case "country":
      return <CountryPage countryName={pageInfo.countryName} />;
    default:
      break;
  }
};

export default PageChooser;
