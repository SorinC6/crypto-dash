import React from "react";
import { LayoutStyle } from "./components/styles/Layout";
import AppBar from "./components/AppBar";
import AppProvider from "./AppProvider";
import Settings from "./components/Settings/index";
import Content from "./components/Shared/Content";

function App() {
  return (
    <LayoutStyle>
      <AppProvider>
        <AppBar />
        <Content>
          <Settings />
        </Content>
      </AppProvider>
    </LayoutStyle>
  );
}

export default App;
