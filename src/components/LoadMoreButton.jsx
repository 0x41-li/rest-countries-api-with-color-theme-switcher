import React from "react";
import { useContext } from "react";
import CountriesContext from "../contexts/CountriesContext";

export const LoadMoreButton = () => {
  const { loadMore } = useContext(CountriesContext);
  return (
    <button className="load-more-btn" onClick={loadMore}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
