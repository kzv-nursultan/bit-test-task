import CanvasJSReact from "@canvasjs/react-stockcharts";

const CanvasJSStockChart = CanvasJSReact?.CanvasJSStockChart;

const containerProps = {
  width: "351px",
  height: "410px",
  margin: "auto 20px auto",
};

const labelsFontStyles = {
  labelFontFamily: "'IBM Plex Sans', sans-serif",
  labelFontColor: "#616D8D",
  labelFontSize: 14,
  labelFontWeight: 500,
  labelFontStyle: "normal",
};

export const Chart = () => {
  const options = {
    theme: "dark1",
    animationEnabled: true,
    exportEnabled: false,
    handleBorderColor: "transparent",
    colorSet: ["#121825"],
    charts: [
      {
        backgroundColor: "#121825",
        axisX: { ...labelsFontStyles, tickLength: 0, lineColor: "transparent" },
        axisY2: {
          ...labelsFontStyles,
          gridColor: "#222B44",
          tickLength: 0,
          lineColor: "transparent",
        },
        data: [
          {
            lineColor: "#1C64F2",
            type: "line",
            axisYType: "secondary",
            highlightEnabled: false,
            markerSize: 0,
            dataPoints: [
              { x: new Date("2018-01-01"), y: 71 },
              { x: new Date("2018-02-01"), y: 55 },
              { x: new Date("2018-03-01"), y: 50 },
              { x: new Date("2018-04-01"), y: 65 },
              { x: new Date("2018-05-01"), y: 95 },
              { x: new Date("2018-06-01"), y: 68 },
              { x: new Date("2018-07-01"), y: 28 },
            ],
          },
        ],
      },
    ],
    navigator: {
      enabled: true,
      height: 24,
      backgroundColor: "#121825",
      axisX: {
        ...labelsFontStyles,
        tickLength: 0,
        lineColor: "transparent",
        labelPlacement: "inside",
      },
      axisY: {
        lineColor: "#222B44",
        tickLength: 0,
        labelPlacement: "inside",
      },
      slider: {
        outlineColor: "#222B44",
        maskColor: "#222B44",
        handleColor: "#1C64F2",
        handleBorderColor: "transparent",
      },
    },
    rangeSelector: {
      enabled: false,
    },
  };
  return (
    <CanvasJSStockChart id="canvas-chart" containerProps={containerProps} options={options} />
  );
};
