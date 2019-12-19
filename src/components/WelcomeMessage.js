import React, { useContext } from "react";
import { AppContext } from "../AppProvider";

export default function WelcomeMessage() {
  const { state } = useContext(AppContext);
  return (
    <>
      {state.firstVizit && (
        <div>
          Welcome to CryptoDash, please select your favorite coins to begin
        </div>
      )}
    </>
  );
}
