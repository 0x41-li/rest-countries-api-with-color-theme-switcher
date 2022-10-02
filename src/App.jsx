import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";

// sass
import "./sass/main.scss";

// context
import { CountriesContextProvider } from "./contexts/CountriesContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";

// sections
import Header from "./sections/Header";

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Nunito Sans:800,600,400,300&display=swap"],
      },
    });
  }, []);

  return (
    <ThemeContextProvider>
      <CountriesContextProvider>
        <Header />
        <main></main>
      </CountriesContextProvider>
    </ThemeContextProvider>
  );
};

export default App;