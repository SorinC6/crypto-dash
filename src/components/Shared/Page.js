import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";

export default function Page({ name, children }) {
  const { state } = useContext(AppContext);
  return <>{state.page !== name ? null : <div>{children}</div>}</>;
}
