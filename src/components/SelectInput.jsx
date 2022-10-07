import React, { useState } from "react";

// icons
import { ReactComponent as ExpandMoreArrow } from "../assets/icons/expand-more-arrow.svg";

const SelectInput = () => {
  const [areOptionsDisplayed, setAreOptionsDisplayed] = useState(false);
  const [valueSelected, setValueSelect] = useState("");

  function toggleOptionsDisplayed() {
    setAreOptionsDisplayed((prevState) => !prevState);
  }

  function selectNewValue(e) {
    if (e.target != e.currentTarget) {
      setValueSelect(e.target.textContent);
    }
  }

  return (
    <div
      className={
        "countries-select-input" + " " + (areOptionsDisplayed && "opened")
      }
      role="listbox"
    >
      <div
        className="countries-select-input__value-box"
        onClick={toggleOptionsDisplayed}
        tabIndex="0"
      >
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
        <span className="countries-select-input__list__option">America</span>
        <span className="countries-select-input__list__option">Asia</span>
        <span className="countries-select-input__list__option">Europe</span>
        <span className="countries-select-input__list__option">Oceania</span>
      </div>
    </div>
  );
};

export default SelectInput;
