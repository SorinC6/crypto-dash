import React from "react";
import Welcome from "./components/WelcomeMessage";
import { LayoutStyle } from "./components/styles/Layout";
import AppBar from "./components/AppBar";
import AppProvider from "./AppProvider";

function App() {
  return (
    <LayoutStyle>
      <AppProvider>
        <AppBar />
        <Welcome />
      </AppProvider>
    </LayoutStyle>
  );
}

export default App;
