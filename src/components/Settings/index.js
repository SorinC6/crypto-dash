import React, { useEffect, useContext } from "react";
import { AppContext } from "../../AppProvider";
import WelcomeMessage from "../WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";
import Search from "./Search";

export default function Index() {
  const { saveSettings } = useContext(AppContext);

  useEffect(() => {
    saveSettings();
  }, []);

  return (
    <Page name="settings">
      <WelcomeMessage />
      <CoinGrid topSection />
      <ConfirmButton />
      <Search />
      <CoinGrid />
    </Page>
  );
}
