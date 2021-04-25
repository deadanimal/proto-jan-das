import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: "app-syarikat-pengauditan",
  templateUrl: "./syarikat-pengauditan.component.html",
  styleUrls: ["./syarikat-pengauditan.component.scss"],
})
export class SyarikatPengauditanComponent implements OnInit, OnDestroy {
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;

  constructor(private zone: NgZone) {}

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart2.dispose();
      }
      if (this.chart3) {
        console.log("Chart disposed");
        this.chart3.dispose();
      }
      if (this.chart4) {
        console.log("Chart disposed");
        this.chart4.dispose();
      }
    });
  }

  ngOnInit() {
    this.getCharts();
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1();
      this.getChart2();
      this.getChart3();
      this.getChart4();
    });
  }

  getChart1() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("syp1", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "Selesai",
        value: 401,
      },
      {
        country: "Sedang dilaksanakan",
        value: 128,
      },
    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "country";

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    chart.legend = new am4charts.Legend();
  }

  getChart2() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("syp2", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Syarikat negeri",
        litres: 501.9,
      },
      {
        country: "Agensi Kerajaan Persekutuan",
        litres: 250,
      },
    ];

    // Set inner radius
    chart.innerRadius = am4core.percent(50);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }

  getChart3() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("syp3", am4charts.XYChart);
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "top";
    chart.legend.paddingBottom = 20;
    chart.legend.labels.template.maxWidth = 95;

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = "category";
    xAxis.renderer.cellStartLocation = 0.1;
    xAxis.renderer.cellEndLocation = 0.9;
    xAxis.renderer.grid.template.location = 0;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = value;
      series.dataFields.categoryX = "category";
      series.name = name;

      series.events.on("hidden", arrangeColumns);
      series.events.on("shown", arrangeColumns);

      let bullet = series.bullets.push(new am4charts.LabelBullet());
      bullet.interactionsEnabled = false;
      bullet.dy = 30;
      bullet.label.text = "{valueY}";
      bullet.label.fill = am4core.color("#ffffff");

      return series;
    }

    chart.data = [
      {
        category: "Place #1",
        first: 40,
        second: 55,
        third: 60,
      },
      {
        category: "Place #2",
        first: 30,
        second: 78,
        third: 69,
      },
      {
        category: "Place #3",
        first: 27,
        second: 40,
        third: 45,
      },
      {
        category: "Place #4",
        first: 50,
        second: 33,
        third: 22,
      },
    ];

    createSeries("first", "The First");
    createSeries("second", "The Second");
    createSeries("third", "The Third");

    function arrangeColumns() {
      let series = chart.series.getIndex(0);

      let w =
        1 -
        xAxis.renderer.cellStartLocation -
        (1 - xAxis.renderer.cellEndLocation);
      if (series.dataItems.length > 1) {
        let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
        let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
        let delta = ((x1 - x0) / chart.series.length) * w;
        if (am4core.isNumber(delta)) {
          let middle = chart.series.length / 2;

          let newIndex = 0;
          chart.series.each(function (series) {
            if (!series.isHidden && !series.isHiding) {
              series.dummyData = newIndex;
              newIndex++;
            } else {
              series.dummyData = chart.series.indexOf(series);
            }
          });
          let visibleCount = newIndex;
          let newMiddle = visibleCount / 2;

          chart.series.each(function (series) {
            let trueIndex = chart.series.indexOf(series);
            let newIndex = series.dummyData;

            let dx = (newIndex - trueIndex + middle - newMiddle) * delta;

            series.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
            series.bulletsContainer.animate(
              { property: "dx", to: dx },
              series.interpolationDuration,
              series.interpolationEasing
            );
          });
        }
      }
    }
  }

  getChart4() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("syp4", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    // using math in the data instead of final values just to illustrate the idea of Waterfall chart
    // a separate data field for step series is added because we don't need last step (notice, the last data item doesn't have stepValue)
    chart.data = [
      {
        category: "Net revenue",
        value: 8786,
        open: 0,
        stepValue: 8786,
        color: chart.colors.getIndex(13),
        displayValue: 8786,
      },
      {
        category: "Cost of sales",
        value: 8786 - 2786,
        open: 8786,
        stepValue: 8786 - 2786,
        color: chart.colors.getIndex(8),
        displayValue: 2786,
      },
      {
        category: "Operating expenses",
        value: 8786 - 2786 - 1786,
        open: 8786 - 2786,
        stepValue: 8786 - 2786 - 1786,
        color: chart.colors.getIndex(9),
        displayValue: 1786,
      },
      {
        category: "Amortisation",
        value: 8786 - 2786 - 1786 - 453,
        open: 8786 - 2786 - 1786,
        stepValue: 8786 - 2786 - 1786 - 453,
        color: chart.colors.getIndex(10),
        displayValue: 453,
      },
      {
        category: "Income from equity",
        value: 8786 - 2786 - 1786 - 453 + 1465,
        open: 8786 - 2786 - 1786 - 453,
        stepValue: 8786 - 2786 - 1786 - 453 + 1465,
        color: chart.colors.getIndex(16),
        displayValue: 1465,
      },
      {
        category: "Operating income",
        value: 8786 - 2786 - 1786 - 453 + 1465,
        open: 0,
        color: chart.colors.getIndex(17),
        displayValue: 8786 - 2786 - 1786 - 453 + 1465,
      },
    ];

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 40;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.dataFields.categoryX = "category";
    columnSeries.dataFields.valueY = "value";
    columnSeries.dataFields.openValueY = "open";
    columnSeries.fillOpacity = 0.8;
    columnSeries.sequencedInterpolation = true;
    columnSeries.interpolationDuration = 1500;

    let columnTemplate = columnSeries.columns.template;
    columnTemplate.strokeOpacity = 0;
    columnTemplate.propertyFields.fill = "color";

    let label = columnTemplate.createChild(am4core.Label);
    label.text = "{displayValue.formatNumber('#,## a')}";
    label.align = "center";
    label.valign = "middle";

    let stepSeries = chart.series.push(new am4charts.StepLineSeries());
    stepSeries.dataFields.categoryX = "category";
    stepSeries.dataFields.valueY = "stepValue";
    stepSeries.noRisers = true;
    stepSeries.stroke = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    stepSeries.strokeDasharray = "3,3";
    stepSeries.interpolationDuration = 2000;
    stepSeries.sequencedInterpolation = true;

    // because column width is 80%, we modify start/end locations so that step would start with column and end with next column
    stepSeries.startLocation = 0.1;
    stepSeries.endLocation = 1.1;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "none";
  }
}
