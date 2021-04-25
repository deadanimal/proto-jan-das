import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: "app-prestasi-gpis",
  templateUrl: "./prestasi-gpis.component.html",
  styleUrls: ["./prestasi-gpis.component.scss"],
})
export class PrestasiGPISComponent implements OnInit, OnDestroy {
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;

  focus2;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.getCharts();
  }

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

    let chart = am4core.create("gpis1", am4charts.XYChart);
    chart.padding(40, 40, 40, 40);

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "network";
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "network";
    series.dataFields.valueX = "MAU";
    series.tooltipText = "{valueX.value}";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;

    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.horizontalCenter = "left";
    labelBullet.label.dx = 10;
    labelBullet.label.text =
      "{values.valueX.workingValue.formatNumber('#.0as')}";
    labelBullet.locationX = 1;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    categoryAxis.sortBySeries = series;
    chart.data = [
      {
        network: "Bahagian Perolehan Dalaman",
        MAU: 2255250000,
      },
      {
        network: "Program Pertahanan",
        MAU: 430000000,
      },
      {
        network: "Kementerian Dalam Negeri",
        MAU: 1000000000,
      },
      {
        network: "Kementerian Kesihatan",
        MAU: 246500000,
      },
      {
        network: "Bahagian Perolehan",
        MAU: 355000000,
      },
      {
        network: "Kementerian Kemajuan",
        MAU: 500000000,
      },
      {
        network: "Bahagian HEP",
        MAU: 624000000,
      },
      {
        network: "Bahagian Pembangunan",
        MAU: 329500000,
      },
      {
        network: "Majlis Pembangunan Wilayah",
        MAU: 1000000000,
      },
      {
        network: "Jabatan Kesihatan Negeri",
        MAU: 431000000,
      },
    ];
  }

  getChart2() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("gpis2", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        country: "Siap",
        litres: 501.9,
      },
      {
        country: "Dalam pelaksanaan",
        litres: 301.9,
      },
      {
        country: "Others",
        litres: 201.1,
      },
      {
        country: "Undefined",
        litres: 165.8,
      },
    ];

    chart.innerRadius = 50;

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
  }

  getChart3() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("gpis3", am4charts.XYChart);

    let data = [];
    let value = 120;

    let names = [
      "Pharmani...",
      "M.S Ally...",
      "Primabum...",
      "Quality R...",
      "Mutiara...",
      "Pharmase...",
      "Alam Med...",
      "Percetak...",
      "Teraju Fa...",
    ];

    for (var i = 0; i < names.length; i++) {
      value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
      data.push({ category: names[i], value: value });
    }

    chart.data = data;
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 15;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
    categoryAxis.renderer.labels.template.rotation = -90;
    categoryAxis.renderer.labels.template.horizontalCenter = "left";
    categoryAxis.renderer.labels.template.location = 0.5;

    categoryAxis.renderer.labels.template.adapter.add(
      "dx",
      function (dx, target) {
        return -target.maxRight / 2;
      }
    );

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.axisFills.template.disabled = true;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "category";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0;
    series.strokeOpacity = 1;
    series.strokeDasharray = "1,3";
    series.columns.template.width = 0.01;
    series.tooltip.pointerOrientation = "horizontal";

    let bullet = series.bullets.create(am4charts.CircleBullet);

    chart.cursor = new am4charts.XYCursor();

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarY = new am4core.Scrollbar();
  }

  getChart4() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("gpis4", am4charts.XYChart3D);

    // Add data
    chart.data = [
      {
        year: "Tender Terbuka",
        income: 23.5,
        color: chart.colors.next(),
      },
      {
        year: "Kontrak Kementerian",
        income: 26.2,
        color: chart.colors.next(),
      },
      {
        year: "Rundingan Terus (Kua...",
        income: 30.1,
        color: chart.colors.next(),
      },
      {
        year: "Pembelian Terus/Requ...",
        income: 29.5,
        color: chart.colors.next(),
      },
      {
        year: "Sebut Harga",
        income: 24.6,
        color: chart.colors.next(),
      },
    ];

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueX = "income";
    series.dataFields.categoryY = "year";
    series.name = "Income";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.tooltipText = "{valueX}";
    series.columns.template.column3D.stroke = am4core.color("#fff");
    series.columns.template.column3D.strokeOpacity = 0.2;
  }
}
