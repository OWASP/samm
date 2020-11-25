import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {AuthService} from '../../services/auth.services';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-rtc',
  templateUrl: './rtc.component.html',
  styleUrls: ['./rtc.component.scss']
})
export class RtcComponent implements OnInit, OnDestroy {

// tslint:disable: variable-name
// tslint:disable: only-arrow-functions

private chart: am4charts.XYChart;

constructor(private zone: NgZone,private authService: AuthService) {}

ngOnInit() {
  this.authService.corona_rtc().subscribe(data =>
    {
      console.log(data.Mar)
const temperatures = {
  Q1: [
    ['Jan', 0, 3,data.Jan, 5],
    ['Feb', 0, 3, data.Feb, 3],
    ['Mar', 0, 7, data.Mar, 2],

  ],

  Q2: [

    ['Apr', 0, 1, data.Apr, 5],
    ['May', 0, 3, data.May, 7],
    ['Jun', 0, 1, data.Jun, 1],

  ],

  Q3: [

    ['Jul', 0, 1, data.Jul, 2],
    ['Aug', 0, 2, data.Aug, 3],
    ['sep', 0, 2, data.Sep, 1],

  ],

  Q4: [

    ['Oct', 0, 1, data.Oct, 3],
    ['Nov', 0, 3, data.Nov, 2],
    ['Dec', 0, 2, data.Dec, 2],

  ]
};

const myColor = ['#01f8f8', '#55c4ef', '#077dd0', '#004695'];

const startYear = 2019;
const endYear = 2021;
let currentYear = 2020;
const colorSet = new am4core.ColorSet();

const chart = am4core.create('chartdiv_rtc', am4charts.RadarChart);

chart.logo.disabled = true;

// chart.numberFormatter.numberFormat = '+#.0°C|#.0°C|0.0°C';
chart.hiddenState.properties.opacity = 0;

chart.startAngle = 270 - 180;
chart.endAngle = 270 + 180;

chart.padding(45, 15, 65, 10);
chart.radius = am4core.percent(100);
chart.innerRadius = am4core.percent(30);

// year label goes in the middle
const yearLabel = chart.radarContainer.createChild(am4core.Label);
yearLabel.horizontalCenter = 'middle';
yearLabel.zIndex = 20;
yearLabel.verticalCenter = 'middle';
yearLabel.fill = am4core.color('#539db3');
yearLabel.fontSize = 15;
yearLabel.text = String(currentYear);

/*
// zoomout button
let zoomOutButton = chart.zoomOutButton;
zoomOutButton.dx = 0;
zoomOutButton.dy = 0;
zoomOutButton.marginBottom = 15;
zoomOutButton.parent = chart.rightAxesContainer;

// scrollbar
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.rightAxesContainer;
chart.scrollbarX.orientation = "vertical";
chart.scrollbarX.align = "center";
chart.scrollbarX.exportable = false;

// vertical orientation for zoom out button and scrollbar to be positioned properly
chart.rightAxesContainer.layout = 'vertical';
chart.rightAxesContainer.padding(120, 20, 120, 20);
*/

// category axis

const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis() as any);
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = 'country';

const categoryAxisRenderer = categoryAxis.renderer;
const categoryAxisLabel = categoryAxisRenderer.labels.template;
categoryAxisLabel.location = 0.5;
categoryAxisLabel.radius = 28;
categoryAxisLabel.fill = '#93a2ac';
categoryAxisLabel.relativeRotation = 0;

categoryAxisRenderer.fontSize = 8;
categoryAxisRenderer.minGridDistance = 10;
categoryAxisRenderer.grid.template.radius = -25;
categoryAxisRenderer.grid.template.strokeOpacity = 0.05;
categoryAxisRenderer.grid.template.interactionsEnabled = false;

categoryAxisRenderer.ticks.template.disabled = true;
categoryAxisRenderer.axisFills.template.disabled = true;
categoryAxisRenderer.line.disabled = true;

categoryAxisRenderer.tooltipLocation = 0.5;
categoryAxis.tooltip.defaultState.properties.opacity = 0;

// value axis

const valueAxis = chart.yAxes.push(new am4charts.ValueAxis() as any);
valueAxis.min = 0;
valueAxis.max = 12;
valueAxis.strictMinMax = true;
valueAxis.tooltip.defaultState.properties.opacity = 0.1;
valueAxis.tooltip.animationDuration = 0;
valueAxis.cursorTooltipEnabled = true;
valueAxis.opacity = 0;
valueAxis.zIndex = 10;

const valueAxisRenderer = valueAxis.renderer;
valueAxisRenderer.axisFills.template.disabled = true;
valueAxisRenderer.ticks.template.disabled = true;
valueAxisRenderer.minGridDistance = 20;
valueAxisRenderer.grid.template.strokeOpacity = 0.05;


// series
const series = chart.series.push(new am4charts.RadarColumnSeries());
series.columns.template.width = am4core.percent(90);
series.columns.template.strokeOpacity = 0.1;
series.dataFields.valueY = 'value' + currentYear;
series.dataFields.categoryX = 'country';
series.tooltip.defaultState.properties.opacity = 1;
series.tooltip.defaultState.properties.fill = am4core.color('#ffffff');
series.tooltipText = '{categoryX}:{valueY.value}';

// this makes columns to be of a different color, depending on value
series.heatRules.push({
  target: series.columns.template,
  property: 'fill',
  minValue: 0,
  maxValue: 15,
  min: am4core.color('#990238'),
  max: am4core.color('#27000d'),
  dataField: 'valueY'
});
// cursor
const cursor = new am4charts.RadarCursor();
chart.cursor = cursor;
cursor.behavior = 'zoomX';

cursor.xAxis = categoryAxis;
cursor.innerRadius = am4core.percent(40);
cursor.lineY.disabled = true;

cursor.lineX.fillOpacity = 0.1;
cursor.lineX.fill = am4core.color('#ffffff');
cursor.lineX.strokeOpacity = 0;
cursor.fullWidthLineX = true;

// year slider
const yearSliderContainer = chart.createChild(am4core.Container);
yearSliderContainer.layout = 'horizontal';
yearSliderContainer.padding(5, -90, 0, 90);
yearSliderContainer.width = am4core.percent(30);
yearSliderContainer.height = am4core.percent(4);


const yearSlider = yearSliderContainer.createChild(am4core.Slider);
yearSlider.events.on('rangechanged', function() {
  updateRadarData(startYear + Math.round(yearSlider.start * (endYear - startYear)));
});
yearSlider.orientation = 'horizontal';
yearSlider.start = 0.5;
yearSlider.exportable = false;

chart.data = generateRadarData();

function generateRadarData() {
  const data = [];
  let i = 0;
  // tslint:disable-next-line: forin
  for (const continent in temperatures) {
      const continentData = temperatures[continent];

      continentData.forEach(function(country: any) {
          const rawDataItem = { country: country[0] };

          for (let y = 2; y < country.length; y++) {
              rawDataItem['value' + (startYear + y - 2)] = country[y];
          }

          data.push(rawDataItem);
      });

      createRange(continent, continentData, i);
      i++;

  }
  return data;
}


function updateRadarData(year) {
  if (currentYear !== year) {
      currentYear = year;
      yearLabel.text = String(currentYear);
      series.dataFields.valueY = 'value' + currentYear;
      chart.invalidateRawData();
  }
}

function createRange(name, continentData, index) {

  const axisRange = categoryAxis.axisRanges.create();
  axisRange.axisFill.interactionsEnabled = true;
  axisRange.text = name;
  // first country
  axisRange.category = continentData[0][0];
  // last country
  axisRange.endCategory = continentData[continentData.length - 1][0];

  // every 3rd color for a bigger contrast
  // axisRange.axisFill.fill = colorSet.getIndex(index * 3);
  axisRange.axisFill.fill = myColor[index];
  console.log(index);
  axisRange.grid.disabled = true;
  axisRange.label.interactionsEnabled = false;
  axisRange.label.bent = true;

  const axisFill = axisRange.axisFill;
  axisFill.innerRadius = -0.001; // almost the same as 100%, we set it in pixels as later we animate this property to some pixel value
  axisFill.radius = -20; // negative radius means it is calculated from max radius
  axisFill.disabled = false; // as regular fills are disabled, we need to enable this one
  axisFill.fillOpacity = 0.3;
  axisFill.togglable = true;

  axisFill.showSystemTooltip = true;
  axisFill.readerTitle = 'click to zoom';
  axisFill.cursorOverStyle = am4core.MouseCursorStyle.pointer;

  // tslint:disable-next-line: only-arrow-functions
  axisFill.events.on('hit', function(event) {
      const dataItem = event.target.dataItem;
      if (!event.target.isActive) {
          categoryAxis.zoom({ start: 0, end: 1 });
      } else {
          categoryAxis.zoomToCategories(dataItem.category, dataItem.endCategory);
      }
  });

  // hover state
  const hoverState = axisFill.states.create('hover');
  hoverState.properties.innerRadius = -10;
  hoverState.properties.radius = -25;

  const axisLabel = axisRange.label;
  axisLabel.location = 0.5;
  axisLabel.fill = am4core.color('#ffffff');
  axisLabel.radius = 3;
  axisLabel.relativeRotation = 0;
}

    });
}



ngOnDestroy() {
this.zone.runOutsideAngular(() => {
  if (this.chart) {
    this.chart.dispose();
  }
});
}

}

