/* eslint-disable react/prop-types */
import React from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const PieChart = ({ pieChartData }) => {
  const orderStatusValues = {
    ...pieChartData,
  };

  React.useEffect(() => {
    let root = am5.Root.new("pieChart");
    root.setThemes([am5themes_Animated.new(root)]);
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      })
    );
    root._logo.dispose();
    let ttip = am5.Tooltip.new(root, {
      labelText: "{category}: {value}",
    });
    ttip.get("background").setAll({
      strokeOpacity: 0,
    });
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        radius: am5.percent(105),
        innerRadius: am5.percent(80),
        tooltip: ttip,
      })
    );
    let templeteSettings = {
      fillOpacity: 0.5,
      strokeOpacity: 0,
      templateField: "settings",
    };
    series.slices.template.setAll(templeteSettings);
    let forceHidden = { forceHidden: true };
    series.ticks.template.setAll(forceHidden);
    series.labels.template.setAll(forceHidden);
    series.data.setAll(
      Object.keys(orderStatusValues).map((status) => ({
        category: status,
        value: orderStatusValues[status],
        settings: {
          fill: getStatusColor(status),
          cornerRadius: 50,
        },
      }))
    );
    let legend = chart.children.push(
      am5.Legend.new(root, {
        x: am5.percent(50),
        centerX: am5.percent(50),
        layout: am5.GridLayout.new(root, {
          maxColumns: 3,
          maxRows: 2,
          fixedWidthGrid: false,
        }),
        fillField: "color",
        strokeField: "color",
        nameField: "name",
      })
    );
    legend.valueLabels.template.set("forceHidden", true);
    legend.data.setAll(
      Object.keys(orderStatusValues).map((status) => ({
        name: status,
        color: getStatusColor(status),
      }))
    );
    legend.markers.template.setAll({
      marginTop: 30,
      marginLeft: 10,
    });
    legend.labels.template.setAll({
      paddingLeft: 5,
      fontSize: 18,
      marginTop: 30,
    });
    return () => {
      root.dispose();
      legend.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "#3a36db";
      case "Processing":
        return "#03a89e";
      case "Shipped":
        return "#0bb783";
      case "Delivered":
        return "#05b5e5";
      case "Cancelled":
        return "#ff69b4";
      default:
        return "#cccccc";
    }
  };

  return (
    <>
      <p className="font-medium text-lg pl-8 py-5">Order Status</p>
      <div style={{ height: "310px", width: "100%" }} id="pieChart"></div>
    </>
  );
};

export default PieChart;
