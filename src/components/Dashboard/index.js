import React, { useEffect, useContext } from "react";
import { AppContext } from "../../AppProvider";
import Page from "../Shared/Page";
import PriceGrid from "./PriceGrid";

export default function Index() {

  return (
    <Page name="dashboard">
      <PriceGrid />
    </Page>
  );
}
