import React from "react";
import Welcome from "./components/WelcomeMessage";
import { LayoutStyle } from "./components/styles/Layout";

function App() {
  return (
    <LayoutStyle>
      <Welcome />
    </LayoutStyle>
  );
}

export default App;
