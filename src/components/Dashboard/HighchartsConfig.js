export default function(histo) {
  return {
    title: {
      text: "CriptoDash"
    },

    subtitle: {
      text: "Source: cryptocompare "
    },

    yAxis: {
      title: {
        text: "Price"
      }
    },
    xAxis: { type: "datetime" },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle"
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },

    series: histo,

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom"
            }
          }
        }
      ]
    }
  };
}
