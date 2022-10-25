import React, { useContext } from "react";

// contexts
import PageContext from "../contexts/PageContext";

// pages
import CountriesPage from "../pages/CountriesPage";
import CountryPage from "../pages/CountryPage";

const PageChooser = () => {
  const { pageInfo } = useContext(PageContext);

  let pageComp;

  switch (pageInfo.page) {
    case "home":
      pageComp = <CountriesPage />;
      break;
    case "country":
      pageComp = <CountryPage countryName={pageInfo.countryName} />;
      break;

    default:
      break;
  }
  return pageComp;
};

export default PageChooser;
