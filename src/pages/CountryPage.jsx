import React, { useContext, useEffect, useState } from "react";

// icons
import { ReactComponent as ArrowLeft } from "../assets/icons/arrow-left.svg";

// contexts
import ThemeContext from "../contexts/ThemeContext";
import PageContext from "../contexts/PageContext";
import CountriesContext from "../contexts/CountriesContext";

const CountryPage = (props) => {
  // destructing props
  const countryName = props.countryName;

  // contexts getters
  const { isDarkTheme } = useContext(ThemeContext);
  const { setPageInfo } = useContext(PageContext);
  const { countriesData } = useContext(CountriesContext);

  // local states
  const countryInfo = countriesData.filter(
    (country) => country.name.common === countryName
  )[0];

  // destructing country info
  const countryNativeName =
    countryInfo.name?.nativeName[Object.keys(countryInfo.languages)[0]]?.common;
  const countryPopulation = countryInfo.population;
  const countryRegion = countryInfo.region;
  const countrySubRegion = countryInfo.subregion;
  const countryCapital = countryInfo.capital[0];
  const countryTld = countryInfo.tld[0];
  const countryCurrencies = Object.values(countryInfo.currencies);
  const countryLanguages = Object.values(countryInfo.languages);
  const countryBorderCountriesCiocCodes = countryInfo.borders ?? null;
  const countryBorderCountriesNames =
    countryBorderCountriesCiocCodes &&
    countryBorderCountriesCiocCodes.map((countryCiocCode) => {
      return countriesData.filter(
        (country) =>
          country.cca2 === countryCiocCode ||
          country.cca3 === countryCiocCode ||
          country.cioc === countryCiocCode
      )[0].name.common;
    });

  return (
    <section className="one-country-section" data-dark-theme={isDarkTheme}>
      {/* ocs = one-country-section */}
      <div className="ocs__back">
        <button
          className="ocs__back-btn"
          onClick={() => setPageInfo({ page: "home" })}
        >
          <ArrowLeft className="ocs__back-btn__icon-svg" />
          <span className="ocs__back-btn__text">Back</span>
        </button>
      </div>
      <div className="ocs__country">
        <div className="ocs__country__flag">
          <img src={countryInfo.flags?.svg} alt={countryName + " Flag"} />
        </div>
        <div className="ocs__country-info">
          <h1 className="ocs__country-info__name">{countryName}</h1>
          <div className="ocs__country-info__wrapper">
            <ul className="ocs__country-info__wrapper__ul">
              <li className="ocs__country-info__wrapper__li">
                <span className="ocs__country-info__wrapper__info-name">
                  Native Name:{" "}
                </span>
                <span className="ocs__country-info__wrapper__info-value">
                  {countryNativeName}
                </span>
              </li>
              <li className="ocs__country-info__wrapper__li">
                <span className="ocs__country-info__wrapper__info-name">
                  Population:{" "}
                </span>
                <span className="ocs__country-info__wrapper__info-value">
                  {numberWithCommas(countryPopulation)}
                </span>
              </li>
              <li className="ocs__country-info__wrapper__li">
                <span className="ocs__country-info__wrapper__info-name">
                  Region:{" "}
                </span>
                <span className="ocs__country-info__wrapper__info-value">
                  {countryRegion}
                </span>
              </li>
              <li className="ocs__country-info__wrapper__li">
                <span className="ocs__country-info__wrapper__info-name">
                  Sub Region:{" "}
                </span>
                <span className="ocs__country-info__wrapper__info-value">
                  {countrySubRegion}
                </span>
              </li>
              <li className="ocs__country-info__wrapper__li">
                <span className="ocs__country-info__wrapper__info-name">
                  Capital:{" "}
                </span>
                <span className="ocs__country-info__wrapper__info-value">
                  {countryCapital}
                </span>
              </li>
            </ul>

            <ul className="ocs__country-info__wrapper__ul">
              <li className="ocs__country-info__wrapper__li">
                <span className="ocs__country-info__wrapper__info-name">
                  Top Level Domain:{" "}
                </span>
                <span className="ocs__country-info__wrapper__info-value">
                  {countryTld}
                </span>
              </li>
              <li className="ocs__country-info__wrapper__li">
                <span className="ocs__country-info__wrapper__info-name">
                  Currencies:{" "}
                </span>
                <span className="ocs__country-info__wrapper__info-value">
                  {countryCurrencies.map((currency, i) => {
                    if (i === countryCurrencies.length - 1) {
                      return currency.name;
                    }
                    return currency.name + ", ";
                  })}
                </span>
              </li>
              <li className="ocs__country-info__wrapper__li">
                <span className="ocs__country-info__wrapper__info-name">
                  Languages:{" "}
                </span>
                <span className="ocs__country-info__wrapper__info-value">
                  {countryLanguages.map((language, i) => {
                    if (i === countryLanguages.length - 1) {
                      return language;
                    }
                    return language + ", ";
                  })}
                </span>
              </li>
            </ul>
          </div>
          {countryBorderCountriesCiocCodes && (
            <div className="ocs__border-countries">
              <h2 className="ocs__border-countries__h2">Border Countries:</h2>
              <ul className="ocs__border-countries__list">
                {countryBorderCountriesNames.map((borderCountryName) => {
                  return (
                    <li key={borderCountryName}>
                      <button
                        className="ocs__border-countries__country-btn"
                        onClick={() =>
                          setPageInfo({
                            page: "country",
                            countryName: borderCountryName,
                          })
                        }
                      >
                        {borderCountryName}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export default CountryPage;
