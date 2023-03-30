import { createContext, useState } from "react";

export const SummaryContext = createContext();

export const SummaryProvider = (props) => {
  const [summary, setSumary] = useState({});

  return (
    <SummaryContext.Provider value={{summary, setSumary}}>{props.children}</SummaryContext.Provider>
  );
};
