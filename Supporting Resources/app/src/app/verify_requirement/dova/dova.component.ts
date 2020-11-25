import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {AuthService} from '../services/auth.service';
am4core.useTheme(am4themes_animated);
 
@Component({
  selector: 'VERE-dova',
  templateUrl: './dova.component.html', 
  styleUrls: ['./dova.component.scss'],
  providers: [AuthService]
})
export class VEREDovaComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit() {

    const chart = am4core.create("chartdiv_dova", am4charts.XYChart);
    chart.logo.disabled = true;
    this.authService.fourthgraph({'secpractice':'Requirements Driven Testing'}).subscribe(
      res => {
        var d = new Date();
        var today_date = d.toLocaleDateString();
      //  console.log(today_date.toLocaleDateString());
      d.setMonth(d.getMonth() - 1);
       var previous_month_1=d.toLocaleDateString();
      d.setMonth(d.getMonth() - 1);
      var previous_month_2=d.toLocaleDateString();
       console.log(today_date)
       var level_p,level_b,level_b2;
       if(0<=res.score_cur )
        level_p=0;
      else if(0<res.score_cur && res.score_cur<=1)
        level_p=1;
      else if(1<res.score_cur && res.score_cur<=2)
        level_p=2;
      else if(3<res.score_cur && res.score_cur<=3)
        level_p=3;
      if(0<=res.score_before_1 )
        level_b=0;

      else if(0>res.score_before_1 && res.score_before_1<=1)
        level_b=1;
      else if(1<res.score_before_1 && res.score_before_1<=2)
        level_b=2;
      else if(3<res.score_before_1 && res.score_before_1<=3)
        level_b=3;
      if(0<=res.score_before_2 )
        level_b2=0;
      if(0<res.score_before_2 && res.score_before_2<=1)
        level_b2=1;
      else if(1<res.score_before_2 && res.score_before_2<=2)
        level_b2=2;
      else if(3<res.score_before_2 && res.score_before_2<=3)
        level_b2=3;
       console.log(previous_month_1)
       console.log(previous_month_2)
       //"date": new Date( parseInt(c[2]) , parseInt(c[0]),parseInt(c[1]) ),
     // Add data
     chart.data = [{
      "date": previous_month_2,
      "market1":res.score_before_2,
      "sales2":res.score_before_2
    }, {
      "date": previous_month_1,
      "market1":res.score_before_1,
      "sales2":res.score_before_1
    }, {
      "date":today_date,
      "market1":res.score_cur,
      "sales2":res.score_cur
      
    }, ];
  }, 
  err => {
   
  }
);



    // Create axes    
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 40;
    dateAxis.renderer.labels.template.fontSize = 10;
    dateAxis.renderer.labels.template.fill = am4core.color("#708090");

    const valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis1.title.text = "Score";
    valueAxis1.title.fill = am4core.color('#708090');
    valueAxis1.fontSize = 10;
    valueAxis1.min = 0;
    valueAxis1.max = 3;
    valueAxis1.renderer.minGridDistance = 15;
    valueAxis1.renderer.labels.template.fill = am4core.color("#708090");


    const valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.title.text = "Maturity Level";
    valueAxis2.title.fill = am4core.color('#708090');
    valueAxis2.renderer.opposite = true;
    valueAxis2.renderer.grid.template.disabled = true;
    valueAxis2.fontSize = 10;
    valueAxis2.min = 0;
    valueAxis2.max = 3;
    valueAxis2.strictMinMax = true;
    valueAxis2.renderer.minGridDistance = 50;
    valueAxis2.renderer.labels.template.fill = am4core.color("#708090");


    const series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "sales2";
    series2.dataFields.dateX = "date";
    series2.yAxis = valueAxis1;
    // series2.name = "Actual Sales";
    series2.name = "[font-size: 15]Score";
    series2.tooltipText = "[bold font-size: 15]{name}\n[bold font-size: 15]{valueY}";
    series2.fill = chart.colors.getIndex(3);
    series2.strokeWidth = 0;
    series2.clustered = false;
    series2.columns.template.width = am4core.percent(50);
    series2.toBack();

    const series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = "market1";
    series3.dataFields.dateX = "date";
    series3.name = "[font-size: 15]Maturity Level";
    series3.strokeWidth = 2;
    series3.fill = am4core.color("#f8a000")
    series3.stroke = am4core.color("#f8a000");
    series3.tensionX = 0.7;
    series3.yAxis = valueAxis2;
    series3.tooltipText = "[bold font-size: 15]{name}\n[bold font-size: 15]{valueY}";


    const bullet3 = series3.bullets.push(new am4charts.CircleBullet());
    bullet3.circle.radius = 3;
    bullet3.circle.strokeWidth = 1;
    bullet3.circle.fill = am4core.color("#fff");

    // Add cursor
    chart.cursor = new am4charts.XYCursor();

    // Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.fontSize = 10;
    chart.legend.position = "top";
    chart.legend.labels.template.fill = am4core.color("#d3d3d3");

    const markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 15;
    markerTemplate.height = 15;


    // Add scrollbar
    /*chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series1);
    chart.scrollbarX.series.push(series3);
    chart.scrollbarX.parent = chart.bottomAxesContainer;
    */


  }

}
