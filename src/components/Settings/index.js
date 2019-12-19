import React, { useEffect, useContext } from "react";
import { AppContext } from "../../AppProvider";
import WelcomeMessage from "../WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";

export default function Index() {
  const { saveSettings } = useContext(AppContext);

  console.log(saveSettings);
  useEffect(() => {
    saveSettings();
  }, []);

  return (
    <Page name="settings">
      <WelcomeMessage />
      <ConfirmButton />
    </Page>
  );
}
