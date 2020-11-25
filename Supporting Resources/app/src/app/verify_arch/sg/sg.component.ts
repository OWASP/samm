import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {AuthService} from '../services/auth.service';
import { splitTextByCharCount } from '@amcharts/amcharts4/.internal/core/utils/Utils';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'VERI-sg',
  templateUrl: './sg.component.html',
  styleUrls: ['./sg.component.scss'],
  providers: [AuthService]
})
export class  VERISgComponent implements OnInit {
  totalscore: {};
  // tslint:disable-next-line: variable-name
brac: {};
sac: {};
uam: {};
 ur: {};
 verify_arch_rating:any;
 verify_requirement_rating:any;
 verify_security_rating:any;
// tslint:disable: quotemark
// tslint:disable: object-literal-key-quotes
// tslint:disable: only-arrow-functions

  constructor(private authService: AuthService) { }

  ngOnInit() {

// Create chart instance
const chart = am4core.create('chartdiv_sg', am4charts.RadarChart);
chart.logo.disabled = true;
this.authService.scores().subscribe(
  res => {
  //  console.log(res.data);
    this.totalscore = res.data;
  },
  err => {
    this.totalscore = err.error.message;
  }
);
// chart values
this.authService.firstgraph().subscribe(
res => {
//  console.log(res.pc);
  this.verify_arch_rating = res.verify_arch_rating;
  this.verify_requirement_rating=res.verify_requirement_rating;
  this.verify_security_rating=res.verify_security_rating;
  chart.data =
    [
      {
        "category": "Architecture Assessment",
        "name": "Architecture Assessment",
        "value": this.verify_arch_rating,
        "full": 100
      }, 
      {
        "category": "Security Testing",
        "name": "Security Testing",
        "value": this.verify_security_rating,
        "full": 100
      },
      {
        "category": "Requirements Driven Testing",
        "name": "Requirements Driven Testing",
        "value": this.verify_requirement_rating,
        "full": 100
      }
    ];

  // tslint:disable-next-line: max-line-length
  // alert('OVERALL READINESS SCORE:   ' + this.policy_and_compliance + ' ' + this.strategy_and_metrices +  ' ' + this.education_and_guidance);
},
err => {
  this.brac = err.error.message;
}
);
// Add data
chart.data = [ ];

// Make chart not full circle
chart.startAngle = -90;
chart.endAngle = 180;
chart.radius = am4core.percent(75);
chart.innerRadius = am4core.percent(30);

// Set number format
chart.numberFormatter.numberFormat = "#.##";

// Create axes
const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis() as any);
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.grid.template.strokeOpacity = 0;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.fontWeight = 900;
categoryAxis.renderer.labels.template.fontSize = 8;
categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
  return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
  // return (target.dataItem.index >= 0) ? '#000000' : fill;
});
categoryAxis.renderer.minGridDistance = 10;

const valueAxis = chart.xAxes.push(new am4charts.ValueAxis() as any);
valueAxis.renderer.grid.template.strokeOpacity = 0;
valueAxis.renderer.labels.template.fill = '#d3d3d3';
valueAxis.renderer.labels.template.fontSize = 10;
valueAxis.min = 0;
valueAxis.max = 3;
valueAxis.strictMinMax = true;

// Create series
const series1 = chart.series.push(new am4charts.RadarColumnSeries() as any);
series1.dataFields.valueX = "full";
series1.dataFields.categoryY = "category";
series1.clustered = false;
series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
series1.columns.template.fillOpacity = 0.08;
series1.columns.template.cornerRadiusTopLeft = 20;
series1.columns.template.strokeWidth = 0;
series1.columns.template.radarColumn.cornerRadius = 20;

const series2 = chart.series.push(new am4charts.RadarColumnSeries());
series2.dataFields.valueX = "value";
series2.dataFields.categoryY = "category";
series2.clustered = false;
series2.columns.template.strokeWidth = 0;
series2.columns.template.tooltipText = "{name}: [bold]{value}[/]";
series2.tooltip.maxWidth = 200;
series2.tooltip.label.wrap = true;
series2.columns.template.radarColumn.cornerRadius = 20;

series2.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});

// Add cursor
chart.cursor = new am4charts.RadarCursor();

  }

}
