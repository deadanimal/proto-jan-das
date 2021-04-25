import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-audit-prestasi",
  templateUrl: "./audit-prestasi.component.html",
  styleUrls: ["./audit-prestasi.component.scss"],
})
export class AuditPrestasiComponent implements OnInit, OnDestroy {
  // Chart
  private chart: any;

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      start: "2011/04/25",
      salary: "$320,800",
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      start: "2011/07/25",
      salary: "$170,750",
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      start: "2009/01/12",
      salary: "$86,000",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      start: "2012/03/29",
      salary: "$433,060",
    },
    {
      name: "Michael Silva",
      position: "Marketing Designer",
      office: "London",
      age: "66",
      start: "2012/11/27",
      salary: "$198,500",
    },
    {
      name: "Paul Byrd",
      position: "Chief Financial Officer (CFO)",
      office: "New York",
      age: "64",
      start: "2010/06/09",
      salary: "$725,000",
    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      age: "59",
      start: "2009/04/10",
      salary: "$237,500",
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      office: "London",
      age: "41",
      start: "2012/10/13",
      salary: "$132,000",
    },
    {
      name: "Dai Rios",
      position: "Personnel Lead",
      office: "Edinburgh",
      age: "35",
      start: "2012/09/26",
      salary: "$217,500",
    },
    {
      name: "Jenette Caldwell",
      position: "Development Lead",
      office: "New York",
      age: "30",
      start: "2011/09/03",
      salary: "$345,000",
    },
    {
      name: "Yuri Berry",
      position: "Chief Marketing Officer (CMO)",
      office: "New York",
      age: "40",
      start: "2009/06/25",
      salary: "$675,000",
    },
    {
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      office: "New York",
      age: "21",
      start: "2011/12/12",
      salary: "$106,450",
    },
    {
      name: "Doris Wilder",
      position: "Sales Assistant",
      office: "Sidney",
      age: "23",
      start: "2010/09/20",
      salary: "$85,600",
    },
    {
      name: "Angelica Ramos",
      position: "Chief Executive Officer (CEO)",
      office: "London",
      age: "47",
      start: "2009/10/09",
      salary: "$1,200,000",
    },
    {
      name: "Gavin Joyce",
      position: "Developer",
      office: "Edinburgh",
      age: "42",
      start: "2010/12/22",
      salary: "$92,575",
    },
    {
      name: "Jennifer Chang",
      position: "Regional Director",
      office: "Singapore",
      age: "28",
      start: "2010/11/14",
      salary: "$357,650",
    },

    {
      name: "Serge Baldwin",
      position: "Data Coordinator",
      office: "Singapore",
      age: "64",
      start: "2012/04/09",
      salary: "$138,575",
    },
    {
      name: "Zenaida Frank",
      position: "Software Engineer",
      office: "New York",
      age: "63",
      start: "2010/01/04",
      salary: "$125,250",
    },
    {
      name: "Zorita Serrano",
      position: "Software Engineer",
      office: "San Francisco",
      age: "56",
      start: "2012/06/01",
      salary: "$115,000",
    },
    {
      name: "Jennifer Acosta",
      position: "Junior Javascript Developer",
      office: "Edinburgh",
      age: "43",
      start: "2013/02/01",
      salary: "$75,650",
    },
    {
      name: "Cara Stevens",
      position: "Sales Assistant",
      office: "New York",
      age: "46",
      start: "2011/12/06",
      salary: "$145,600",
    },
    {
      name: "Hermione Butler",
      position: "Regional Director",
      office: "London",
      age: "47",
      start: "2011/03/21",
      salary: "$356,250",
    },
    {
      name: "Lael Greer",
      position: "Systems Administrator",
      office: "London",
      age: "21",
      start: "2009/02/27",
      salary: "$103,500",
    },
    {
      name: "Jonas Alexander",
      position: "Developer",
      office: "San Francisco",
      age: "30",
      start: "2010/07/14",
      salary: "$86,500",
    },
    {
      name: "Shad Decker",
      position: "Regional Director",
      office: "Edinburgh",
      age: "51",
      start: "2008/11/13",
      salary: "$183,000",
    },
    {
      name: "Michael Bruce",
      position: "Javascript Developer",
      office: "Singapore",
      age: "29",
      start: "2011/06/27",
      salary: "$183,000",
    },
    {
      name: "Donna Snider",
      position: "Customer Support",
      office: "New York",
      age: "27",
      start: "2011/01/25",
      salary: "$112,000",
    },
  ];
  SelectionType = SelectionType;

  constructor(private zone: NgZone) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        console.log("Chart disposed");
        this.chart.dispose();
      }
    });
  }

  ngOnInit() {
    this.getCharts();
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart();
    });
  }

  getChart() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("aup1", am4plugins_timeline.SerpentineChart);
    chart.curveContainer.padding(100, 20, 50, 20);
    chart.levelCount = 3;
    chart.yAxisRadius = am4core.percent(20);
    chart.yAxisInnerRadius = am4core.percent(2);
    chart.maskBullets = false;

    let colorSet = new am4core.ColorSet();

    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
    chart.dateFormatter.dateFormat = "HH";

    chart.data = [
      {
        category: "",
        start: "2019-01-10 06:00",
        end: "2019-01-10 07:00",
        color: colorSet.getIndex(15),
        text: "I will have\na healthy day today!",
        textDisabled: false,
        icon: "/wp-content/uploads/assets/timeline/timeline0.svg",
      },
      {
        category: "",
        start: "2019-01-10 07:00",
        end: "2019-01-10 08:00",
        color: colorSet.getIndex(14),
        icon: "/wp-content/uploads/assets/timeline/timeline1.svg",
      },
      {
        category: "",
        start: "2019-01-10 08:00",
        end: "2019-01-10 09:00",
        color: colorSet.getIndex(13),
        icon: "/wp-content/uploads/assets/timeline/timeline2.svg",
      },
      {
        category: "",
        start: "2019-01-10 09:00",
        end: "2019-01-10 10:00",
        color: colorSet.getIndex(12),
        icon: "/wp-content/uploads/assets/timeline/timeline2.svg",
      },
      {
        category: "",
        start: "2019-01-10 10:00",
        end: "2019-01-10 12:00",
        color: colorSet.getIndex(11),
        icon: "/wp-content/uploads/assets/timeline/timeline2.svg",
      },
      {
        category: "",
        start: "2019-01-10 12:00",
        end: "2019-01-10 13:00",
        color: colorSet.getIndex(10),
        icon: "/wp-content/uploads/assets/timeline/timeline1.svg",
      },
      {
        category: "",
        start: "2019-01-10 13:00",
        end: "2019-01-10 14:00",
        color: colorSet.getIndex(9),
        text: "",
        textDisabled: false,
        icon: "/wp-content/uploads/assets/timeline/timeline3.svg",
      },
      {
        category: "",
        start: "2019-01-10 14:00",
        end: "2019-01-10 16:00",
        color: colorSet.getIndex(8),
        icon: "/wp-content/uploads/assets/timeline/timeline2.svg",
      },
      {
        category: "",
        start: "2019-01-10 16:00",
        end: "2019-01-10 17:00",
        color: colorSet.getIndex(7),
        icon: "/wp-content/uploads/assets/timeline/timeline4.svg",
      },
      {
        category: "",
        start: "2019-01-10 17:00",
        end: "2019-01-10 20:00",
        color: colorSet.getIndex(6),
        icon: "/wp-content/uploads/assets/timeline/timeline2.svg",
      },
      {
        category: "",
        start: "2019-01-10 20:00",
        end: "2019-01-10 20:30",
        color: colorSet.getIndex(5),
        icon: "/wp-content/uploads/assets/timeline/timeline3.svg",
      },
      {
        category: "",
        start: "2019-01-10 20:30",
        end: "2019-01-10 21:30",
        color: colorSet.getIndex(4),
        icon: "/wp-content/uploads/assets/timeline/timeline3.svg",
      },
      {
        category: "",
        start: "2019-01-10 21:30",
        end: "2019-01-10 22:00",
        color: colorSet.getIndex(3),
        icon: "/wp-content/uploads/assets/timeline/dance.svg",
      },
      {
        category: "",
        start: "2019-01-10 22:00",
        end: "2019-01-10 23:00",
        color: colorSet.getIndex(2),
        icon: "/wp-content/uploads/assets/timeline/timeline5.svg",
      },
      {
        category: "",
        start: "2019-01-10 23:00",
        end: "2019-01-11 00:00",
        color: colorSet.getIndex(1),
        icon: "/wp-content/uploads/assets/timeline/timeline6.svg",
      },
      {
        category: "",
        start: "2019-01-11 00:00",
        end: "2019-01-11 01:00",
        color: colorSet.getIndex(0),
        text: "",
        textDisabled: false,
        icon: "/wp-content/uploads/assets/timeline/timeline7.svg",
      },
    ];

    chart.fontSize = 10;
    chart.tooltipContainer.fontSize = 10;

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis()as any);
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis()as any);
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 30, timeUnit: "minute" };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.renderer.line.strokeOpacity = 0.5;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    dateAxis.tooltip.label.paddingTop = 7;
    dateAxis.endLocation = 0;
    dateAxis.startLocation = -0.5;

    let labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fillOpacity = 0.4;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor(
      "background"
    );
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.padding(7, 7, 7, 7);

    let series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(15);

    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";
    series.baseAxis = categoryAxis;
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.fillOpacity = 0.6;

    let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.locationX = 1;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "icon";
    imageBullet1.image.scale = 0.5;
    imageBullet1.circle.radius = am4core.percent(100);
    imageBullet1.dy = -5;

    let textBullet = series.bullets.push(new am4charts.LabelBullet());
    textBullet.label.propertyFields.text = "text";
    textBullet.disabled = true;
    textBullet.propertyFields.disabled = "textDisabled";
    textBullet.label.strokeOpacity = 0;
    textBullet.locationX = 1;
    textBullet.dy = -100;
    textBullet.label.textAlign = "middle";

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = "center";
    chart.scrollbarX.width = am4core.percent(75);
    chart.scrollbarX.opacity = 0.5;

    let cursor = new am4plugins_timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.strokeDasharray = "1,4";
    cursor.lineX.strokeOpacity = 1;

    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = false;

    let label = chart.createChild(am4core.Label);
    label.text = "";
    label.isMeasured = false;
    label.y = am4core.percent(40);
    label.x = am4core.percent(50);
    label.horizontalCenter = "middle";
    label.fontSize = 20;
  }
}
