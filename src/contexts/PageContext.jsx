import { createContext, useState } from "react";

export const PageContext = createContext({
  page: "home",
});

export const PageContextProvider = (props) => {
  const [pageInfo, setPageInfo] = useState({
    page: "home",
  });

  return (
    <PageContext.Provider value={{ pageInfo, setPageInfo }}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContext;
