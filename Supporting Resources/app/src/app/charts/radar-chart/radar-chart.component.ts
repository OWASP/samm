import { Component, OnInit } from '@angular/core';

declare const d6: any;
declare const radar_data: any;
declare const vizuly6: any;

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

  // tslint:disable: only-arrow-functions

  constructor() { }

  ngOnInit() {

    const viz = vizuly6.viz.RadarChart('#viz_radar');

    viz.data(radar_data)
     .width(300).height(300)
     .x(function(d: any, i: any) { return String(d.axis).toUpperCase(); })
     .y(function(d: any, i: any) { return d.value; })
     .seriesLabel(function(d: any) { return d.category; })
     .yTickFormat(function(d: any) { return d6.format('.0f')(d * 100) + '%'; });


    viz.style('background-opacity', 0);
    viz.style('label-color', 'azure');
    viz.style('area-fill', '#67b7dc' );
    viz.style('area-fill-opacity', 0.8);
    viz.style('x-axis-font-size', 7);
    viz.style('y-axis-font-size', 7);
    viz.style('y-axis-line-opacity', 0.7);
    viz.style('y-axis-line-stroke', '#FFFFFF');

    viz.update();


  }

}
