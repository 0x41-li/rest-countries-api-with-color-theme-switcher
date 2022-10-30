import React, { useEffect } from "react";
import WebFont from "webfontloader";

// sass
import "./sass/main.scss";

// context
import { PageContextProvider } from "./contexts/PageContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { CountriesContextProvider } from "./contexts/CountriesContext";

// sections
import Header from "./sections/Header";

// components
import PageChooser from "./components/PageChooser";

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
        <PageContextProvider>
          <PageChooser />
        </PageContextProvider>
      </CountriesContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
