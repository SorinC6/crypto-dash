import React, { useEffect, useContext } from "react";
import { AppContext } from "../../AppProvider";
import WelcomeMessage from "../WelcomeMessage";
import ConfirmButton from "./ConfirmButton";

export default function Index() {
  const { saveSettings } = useContext(AppContext);
  
  console.log(saveSettings);
  useEffect(() => {
    saveSettings();
  }, []);

  return (
    <div>
      <WelcomeMessage />
      <ConfirmButton />
    </div>
  );
}
