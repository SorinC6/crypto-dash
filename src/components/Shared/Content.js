import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";

export default function Content({ children }) {
  const { state } = useContext(AppContext);

  if (!state.coinList) {
    return <div>Loading coins...</div>;
  }
  if (!state.firstVizit && !state.prices) {
    return <div>Loading Prices...</div>;
  }
  return <>{children}</>;
}
