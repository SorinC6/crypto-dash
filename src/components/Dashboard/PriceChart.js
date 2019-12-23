import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import config from "./HighchartsConfig";
import { Tile } from "../Shared/Tile";
// import ReactHicharts from "react-highcharts";
const ReactHighcharts = require("react-highcharts"); // Expects that Highcharts was loaded in the code.

export default function PriceChart() {
  const { state } = useContext(AppContext);
  return (
    <Tile>
      <ReactHighcharts config={config}></ReactHighcharts>
    </Tile>
  );
}
