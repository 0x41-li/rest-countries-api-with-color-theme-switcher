import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

// icons
import { ReactComponent as MoonIcon } from "../assets/icons/moon-icon.svg";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <header data-dark-theme={isDarkTheme.toString()}>
      <div className="container">
        <h1>Where in the world?</h1>
        <button className="header__toggle-theme-btn" onClick={toggleTheme}>
          <span className="header__toggle-theme-btn__moon-icon">
            <MoonIcon />
          </span>
          <span className="header__toggle-theme-btn__para">Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
