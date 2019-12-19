import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";

export default function Content({ children }) {
  const { state } = useContext(AppContext);
  return <>{!state.coinList ? <div>Loading Coins</div> : <>{children}</>}</>;
}
