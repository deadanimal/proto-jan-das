import { Component, NgZone, OnDestroy, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-kewangan-fais",
  templateUrl: "./kewangan-fais.component.html",
  styleUrls: ["./kewangan-fais.component.scss"],
})
export class KewanganFaisComponent implements OnInit, OnDestroy {
  // Chart
  private chart: any;

  entries: number = 5;
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

    // Create chart instance
    let chart = am4core.create("fais1", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9,
      },
      {
        country: "Czechia",
        litres: 301.9,
      },
      {
        country: "Ireland",
        litres: 201.1,
      },
      {
        country: "Germany",
        litres: 165.8,
      },
      {
        country: "Australia",
        litres: 139.9,
      },
      {
        country: "Austria",
        litres: 128.3,
      },
      {
        country: "UK",
        litres: 99,
      },
      {
        country: "Belgium",
        litres: 60,
      },
      {
        country: "The Netherlands",
        litres: 50,
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
}
