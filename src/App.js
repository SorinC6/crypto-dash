import React from "react";
import { LayoutStyle } from "./components/styles/Layout";
import AppBar from "./components/AppBar";
import AppProvider from "./AppProvider";
import Settings from "./components/Settings/index";

function App() {
  return (
    <LayoutStyle>
      <AppProvider>
        <AppBar />
        <Settings />
      </AppProvider>
    </LayoutStyle>
  );
}

export default App;
