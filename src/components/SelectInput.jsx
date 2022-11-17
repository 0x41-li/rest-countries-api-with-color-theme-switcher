import React, { useContext, useEffect, useState } from "react";

// icons
import { ReactComponent as ExpandArrow } from "../assets/icons/expand-more-arrow.svg";

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
    if (e.target.closest(".region-select-input")) {
      setAreOptionsDisplayed((prevState) => !prevState);
    } else {
      setAreOptionsDisplayed(false);
    }
  }

  function selectNewValue(e) {
    if (e.target !== e.currentTarget) {
      setValueSelect(e.target.textContent);
      setRegionFilter(e.target.textContent);
    }
  }

  return (
    <div
      className={"region-select-input " + (areOptionsDisplayed && "opened")}
      role="listbox"
      aria-label="Select A Region"
      tabIndex={0}
    >
      <div className="region-select-input__value-box" tabIndex="0">
        <span className="region-select-input__value">
          {valueSelected ? valueSelected : "Filter by Region"}
        </span>
        <ExpandArrow className="region-select-input__icon" />
      </div>

      <div
        className="region-select-input__list"
        onClick={(e) => selectNewValue(e)}
      >
        {["Africa", "Americas", "Asia", "Europe", "Oceania"].map(
          (region, i) => (
            <span
              key={i}
              aria-selected={valueSelected === region}
              className="region-select-input__list__option"
              role="option"
            >
              {region}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default SelectInput;
