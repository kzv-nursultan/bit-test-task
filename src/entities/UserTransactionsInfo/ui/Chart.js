import CanvasJSReact from "@canvasjs/react-stockcharts";
import PropTypes from "prop-types";
import { useMemo } from "react";

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

const dataAdapter = (data) =>
  data.map((obj) => ({
    x: new Date(obj.created_at),
    y: obj.amount,
  }));

const optionsCreator = (data, email) => ({
  theme: "dark1",
  animationEnabled: true,
  exportEnabled: false,
  handleBorderColor: "transparent",
  colorSet: ["#121825"],
  legend: {
    enabled: true,
    horizontalAlign: "center",
    verticalAlign: "bottom",
    fontSize: 15,
  },
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
          legendMarkerType: "square",
          showInLegend: true,
          legendText: email,
          dataPoints: data,
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
      minimum: new Date(Date.now()),
    },
  },
  rangeSelector: {
    enabled: false,
  },
});

export const Chart = ({ data, email }) => {
  const memoData = useMemo(() => dataAdapter(data), [data]);
  //   theme: "dark1",
  //   animationEnabled: true,
  //   exportEnabled: false,
  //   handleBorderColor: "transparent",
  //   colorSet: ["#121825"],
  //   legend: {
  //     enabled: true,
  //     horizontalAlign: "center",
  //     verticalAlign: "bottom",
  //     fontSize: 15,
  //   },
  //   charts: [
  //     {
  //       backgroundColor: "#121825",
  //       axisX: { ...labelsFontStyles, tickLength: 0, lineColor: "transparent" },
  //       axisY2: {
  //         ...labelsFontStyles,
  //         gridColor: "#222B44",
  //         tickLength: 0,
  //         lineColor: "transparent",
  //       },
  //       data: [
  //         {
  //           lineColor: "#1C64F2",
  //           type: "line",
  //           axisYType: "secondary",
  //           highlightEnabled: false,
  //           markerSize: 0,
  //           legendText: email,
  //           dataPoints: memoData,
  //         },
  //       ],
  //     },
  //   ],
  //   navigator: {
  //     enabled: true,
  //     height: 24,
  //     backgroundColor: "#121825",
  //     axisX: {
  //       ...labelsFontStyles,
  //       tickLength: 0,
  //       lineColor: "transparent",
  //       labelPlacement: "inside",
  //     },
  //     axisY: {
  //       lineColor: "#222B44",
  //       tickLength: 0,
  //       labelPlacement: "inside",
  //     },
  //     slider: {
  //       outlineColor: "#222B44",
  //       maskColor: "#222B44",
  //       handleColor: "#1C64F2",
  //       handleBorderColor: "transparent",
  //     },
  //   },
  //   rangeSelector: {
  //     enabled: false,
  //   },
  // };

  return (
    <CanvasJSStockChart
      id="canvas-chart"
      containerProps={containerProps}
      options={optionsCreator(memoData, email)}
    />
  );
};

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  email: PropTypes.string.isRequired,
};
