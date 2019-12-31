import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import config from "./HighchartsConfig";
import { Tile } from "../Shared/Tile";
import HighchartTheme from "./HighChartsTheme";
const ReactHighcharts = require("react-highcharts"); // Expects that Highcharts was loaded in the code.
ReactHighcharts.Highcharts.setOptions(HighchartTheme);

export default function PriceChart() {
  const { state } = useContext(AppContext);
  return (
    <Tile>
      <ReactHighcharts config={config(state.histo)}></ReactHighcharts>
    </Tile>
  );
}
