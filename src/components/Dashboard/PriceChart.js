import React, { useContext } from "react";
import { AppContext } from "../../AppProvider";
import config from "./HighchartsConfig";
import { Tile } from "../Shared/Tile";
import HighchartTheme from "./HighChartsTheme";
import ChartSelect from "./ChartSelect";
const ReactHighcharts = require("react-highcharts"); // Expects that Highcharts was loaded in the code.
ReactHighcharts.Highcharts.setOptions(HighchartTheme);

export default function PriceChart() {
  const { state, changeChartSelect } = useContext(AppContext);
  return (
    <Tile>
      <ChartSelect
        defaultValue="months"
        onChange={e => changeChartSelect(e.target.value)}
      >
        <option value="days">Days</option>
        <option value="weeks">Weeks</option>
        <option value="months">Months</option>
      </ChartSelect>
      {state.histo ? (
        <ReactHighcharts config={config(state.histo)}></ReactHighcharts>
      ) : (
        <div>Loading Chart</div>
      )}
    </Tile>
  );
}
