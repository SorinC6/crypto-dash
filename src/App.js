import React from "react";
import Welcome from "./components/WelcomeMessage";
import { LayoutStyle } from "./components/styles/Layout";
import AppBar from "./components/AppBar";

function App() {
  return (
    <LayoutStyle>
      <AppBar />
      <Welcome />
    </LayoutStyle>
  );
}

export default App;
