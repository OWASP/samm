import { Component, NgZone, OnInit } from '@angular/core';

declare const vizuly5: any;
declare const d5: any;
declare const tree_data: any;

@Component({
  selector: 'app-wt',
  templateUrl: './wt.component.html',
  styleUrls: ['./wt.component.scss']
})
export class WtComponent implements OnInit {

   // tslint:disable: quotemark
   // tslint:disable: only-arrow-functions

  constructor(private zone: NgZone) {}

  ngOnInit() {

    this.zone.runOutsideAngular(() => {

  // Our visualization component.

  const viz = vizuly5.viz.WeightedTree("#viz_wt");

  viz.data({key: 'Overall', values: tree_data})
        .width('100%')
        .height('100%')
        .children(function(d: any) { return d.values; })
        .key(function(d: any) { return d.key || d.Category; })
        .value(function(d: any) {
            const ret = Number(d.Federal);
            return isNaN(ret) ? 0 : ret;
        })
        .valueFormatter(formatValue)
        .label(function(d: any) { return trimLabel(d.key || (d.Category)); })
        .dataTipLabel(function(d: any) { return d.key || d.Category; })
        .useZoomToNode(true)
        .useZoom(true)
        .on("mouseover", onMouseOver)
        .on("mouseout", onMouseOut)
        .on("click", onClick);

 /* viz.style('line-stroke', 'transparent');
  viz.style('axis-opacity', '0.1');
  viz.style('axis-font-size', '8');
  viz.style('line-stroke-over', 'transparent'); */
  viz.style('background-opacity', 0);
  viz.style('label-color', 'azure');
  viz.update();


    // Used to format data tip values
  function formatValue(d: any) {
        if (isNaN(d)) {
          d = 0;
        }
        return "$" + d5.format(",.2f")(d) + " Billion";
    };

    // Used to trim node labels so they are not too long.
  function trimLabel(label: any) {
    return (String(label).length > 20) ? String(label).substr(0, 17) + "..." : label;
  }

  function onMouseOver(e: any, d: any, i: any) {
    console.log("onMouseOver " + d.data.key);
  }

  function onMouseOut(e: any, d: any, i: any) {
    console.log("onMouseOut " + d.data.key);
  }

 // We can capture click events and respond to them
  function onClick(g: any, d: any, i: any) {
    console.log('onClick ' + d.data.key);
  }

  });

}
}
