/* eslint-disable react/prop-types */
import React from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const LineChart = ({ lineChartData }) => {
  React.useEffect(() => {
    const maxOrderCount = lineChartData.reduce(
      (max, obj) => (obj["orderCount"] > max["orderCount"] ? obj : max),
      lineChartData[0]
    );
    let root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
        pinchZoomX: true,
      })
    );
    let cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);
    let data = [...lineChartData];
    let xRenderer = am5xy.AxisRendererX.new(root, {});
    xRenderer.grid.template.set("location", 0.5);
    xRenderer.labels.template.setAll({
      location: 0.5,
      multiLocation: 0.5,
      fontSize: 14,
    });
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "date",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );
    xAxis.get("renderer").grid.template.setAll({
      location: 0,
      strokeWidth: 0,
      visible: false,
    });
    xAxis.data.setAll(data);
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        max: maxOrderCount,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );
    yAxis.get("renderer").grid.template.setAll({
      strokeWidth: 1,
      opacity: 0.5,
    });

    let series = chart.series.push(
      am5xy.SmoothedXLineSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "orderCount",
        categoryXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}" + " Orders placed",
          dy: -5,
        }),
      })
    );
    series.strokes.template.setAll({
      templateField: "strokeSettings",
      strokeWidth: 2,
    });
    series.fills.template.setAll({
      visible: true,
      fillOpacity: .3,
      templateField: "fillSettings",
    });
    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Circle.new(root, {
          radius: 4,
          fill: "#007aff",
        }),
      });
    });
    series.set("fill", am5.color("#007aff"));
    series.set("stroke", am5.color("#007aff"));
    series.data.setAll(data);
    series.appear(1000);
    root._logo.dispose();
    return () => root.dispose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p className="font-medium text-lg pl-8 py-5">Order counts per day</p>
      <div id="chartdiv" style={{ height: "300px", width: "100%" }}></div>
    </>
  );
};

export default LineChart;
