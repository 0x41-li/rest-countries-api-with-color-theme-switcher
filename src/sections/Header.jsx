import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

// icons
import { ReactComponent as MoonIcon } from "../assets/icons/moon-icon.svg";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <header data-dark-theme={isDarkTheme.toString()}>
      <div className="header__inner">
        <h1>Where in the world?</h1>
        <button className="header__toggle-theme-btn" onClick={toggleTheme}>
          <div className="header__toggle-theme-btn__moon-icon">
            <MoonIcon />
          </div>
          <p className="header__toggle-theme-btn__para">Dark Mode</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
