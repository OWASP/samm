import { Component, OnInit } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_sunburst from '@amcharts/amcharts4/plugins/sunburst';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-ssb',
  templateUrl: './ssb.component.html',
  styleUrls: ['./ssb.component.scss']
})
export class SsbComponent implements OnInit {

  // tslint:disable: quotemark
  // tslint:disable: only-arrow-functions

  constructor() { }

  ngOnInit() {

    const chart = am4core.create("chartdiv_ssb", am4plugins_sunburst.Sunburst);
    chart.logo.disabled = true;
    chart.padding(0, 0, 0, 0);
    chart.radius = am4core.percent(70);

    chart.data = [{
  name: "First",
  color: am4core.color("rgba(0,0,0,0.5)"),
  children: [
    { name: "First: 1", value: 100,
    children: [
      { name: "First1: 1", value: 100,
      children: [
        { name: "First1: 1", value: 100 },
        { name: "First1: 2", value: 60 }
      ] },
      { name: "First1: 2", value: 60 }
    ]
    },
    { name: "First: 2", value: 60 }
  ]
},
{
  name: "Second",
  color: am4core.color("rgba(255,255,255,0.5)"),
  children: [
    { name: "Second: 1", value: 135 },
    { name: "Second: 2", value: 98 }
  ]
}];

    chart.colors.step = 2;
    chart.fontSize = 10;
    chart.innerRadius = am4core.percent(20);

// define data fields
    chart.dataFields.value = "value";
    chart.dataFields.name = "name";
    chart.dataFields.children = "children";
    chart.dataFields.color = "color";


    const level0SeriesTemplate = new am4plugins_sunburst.SunburstSeries();
    level0SeriesTemplate.hiddenInLegend = false;
    chart.seriesTemplates.setKey("0", level0SeriesTemplate);

// this makes labels to be hidden if they don't fit
    level0SeriesTemplate.labels.template.truncate = true;
    level0SeriesTemplate.labels.template.hideOversized = true;
    level0SeriesTemplate.fillOpacity = 0.7;
    level0SeriesTemplate.labels.template.text = "{name}";
    level0SeriesTemplate.stroke = am4core.color("#000000");

    level0SeriesTemplate.labels.template.adapter.add("rotation", function(rotation, target) {
    target.maxWidth = target.dataItem.slice.radius - target.dataItem.slice.innerRadius - 10;
    target.maxHeight = Math.abs(
    target.dataItem.slice.arc * (target.dataItem.slice.innerRadius + target.dataItem.slice.radius) / 2 * am4core.math.RADIANS
    );

    return rotation;
});


    const level1SeriesTemplate = level0SeriesTemplate.clone();
    chart.seriesTemplates.setKey("1", level1SeriesTemplate);
    level1SeriesTemplate.fillOpacity = 0.5;
    level1SeriesTemplate.hiddenInLegend = true;
    level1SeriesTemplate.labels.template.text = "{name}";
   // level1SeriesTemplate.labels.template.width = 100;

    const level2SeriesTemplate = level0SeriesTemplate.clone();
    chart.seriesTemplates.setKey("2", level2SeriesTemplate);
    level2SeriesTemplate.fillOpacity = 0.5;
    level2SeriesTemplate.hiddenInLegend = true;


    // Configure legends
    chart.legend = new am4charts.Legend();
    chart.legend.position = "bottom";
    chart.legend.height = am4core.percent(10);

    chart.legend.labels.template.fill = am4core.color("#ffffff");

    const markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 10;
    markerTemplate.height = 10;

  }

}
