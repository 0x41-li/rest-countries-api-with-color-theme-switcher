import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeContextProvider = (props) => {
  let savedDarkThemeValue = toBool(localStorage.getItem("is_dark_theme"));
  const [isDarkTheme, setDarkTheme] = useState(savedDarkThemeValue);

  useEffect(() => {
    localStorage.setItem("is_dark_theme", isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

const toBool = (string) => (string === "true" ? true : false);
