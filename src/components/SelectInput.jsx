import React, { useContext, useEffect, useRef, useState } from "react";

// icons
import { ReactComponent as ExpandMoreArrow } from "../assets/icons/expand-more-arrow.svg";

// contexts
import CountriesContext from "../contexts/CountriesContext";

const SelectInput = () => {
  const [areOptionsDisplayed, setAreOptionsDisplayed] = useState(false);
  const [valueSelected, setValueSelect] = useState("");

  const { setRegionFilter } = useContext(CountriesContext);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  function handleDocumentClick(e) {
    if (e.target.closest(".countries-select-input")) {
      setAreOptionsDisplayed((prevState) => !prevState);
    } else {
      setAreOptionsDisplayed(false);
    }
  }

  function selectNewValue(e) {
    if (e.target != e.currentTarget) {
      setValueSelect(e.target.textContent);
      setRegionFilter(e.target.textContent);
    }
  }

  return (
    <div
      className={
        "countries-select-input" + " " + (areOptionsDisplayed && "opened")
      }
      role="listbox"
    >
      <div className="countries-select-input__value-box" tabIndex="0">
        <span className="countries-select-input__value">
          {valueSelected ? valueSelected : "Filter by Region"}
        </span>
        <ExpandMoreArrow className="countries-select-input__icon" />
      </div>

      <div
        className="countries-select-input__list"
        onClick={(e) => selectNewValue(e)}
      >
        <span className="countries-select-input__list__option">Africa</span>
        <span className="countries-select-input__list__option">Americas</span>
        <span className="countries-select-input__list__option">Asia</span>
        <span className="countries-select-input__list__option">Europe</span>
        <span className="countries-select-input__list__option">Oceania</span>
      </div>
    </div>
  );
};

export default SelectInput;
