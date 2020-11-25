import { Component, AfterViewInit, NgZone, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.services';
import { round } from '@amcharts/amcharts4/.internal/core/utils/Math';
declare var vizuly3: any;
// declare var corona_data: any;

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.scss'],
})

export class CoronaComponent implements OnInit {

// tslint:disable: triple-equals
// tslint:disable: only-arrow-functions

// tslint:disable: triple-equals
// tslint:disable: only-arrow-functions

constructor(private zone: NgZone, private authService: AuthService) {}


// ----------------------- SAMM Corona Chart ----------------------//

governance_p:any;
governance_n:any;
design_p:any;
design_n:any;
implement_p:any;
implement_n:any;
operate_p:any;
operate_n:any;
verify_p:any;
verify_n:any;
overall_p:any;
overall_n:any;
ngOnInit() {
  this.authService.corona().subscribe(data =>
    {
    console.log(data);
    this.governance_p=data.governance_corona;
    this.governance_n=9-data.governance_corona;
    this.design_p=data.design_corona;
    this.design_n=9- data.design_corona;
    //console.log(this.design_n)
    this.implement_p=data.implementation_corona;
    this.implement_n=9-data.implementation_corona;
    this.operate_p=data.operational_corona;
    this.operate_n=9-data.operational_corona;
    this.verify_p=data.verification_corona;
    this.verify_n=9-data.verification_corona;
    this.overall_p=this.governance_p+this.design_p+this.operate_p+this.verify_p+this.implement_p;
    this.overall_n=this.governance_n+this.design_n+this.implement_n+this.verify_n+this.operate_n
  
    this.zone.runOutsideAngular(() => {

const viz = vizuly3.viz.Corona('#viz_container');


  //console.log(this.governance_n)
/*  var corona=[
  [
  {
  "hour": "0",
  "page": "Readiness Gap",
  "views":  9,
  "key": "/download/radial-progress-source-code"
  },
  {
  "hour": "1",
  "page": "Governance",
  "views": this.governance_n,
  "key": "/download/radial-progress-source-code"
  },
  {
  "hour": "2",
  "page": "Design",
  "views":this.design_n,
  "key": "/download/radial-progress-source-code"
  },
  {
  "hour": "3",
  "page": "Implementation",
  "views": this.implement_n,
  "key": "/download/radial-progress-source-code"
  },
  {
  "hour": "4",
  "page": "Verification",
  "views": this.verify_n,
  "key": "/download/radial-progress-source-code"
  },
  {
  "hour": "5",
  "page": "Operations",
  "views": this.operate_n,
  "key": "/download/radial-progress-source-code"
  }
  ],
  [
  {
  "hour": "0",
  "page": "Readiness Achieved",
  "views":9,
  "key": "/political_influence"
  },
  {
  "hour": "1",
  "page": "Governance",
  "views": this.governance_p,
  "key": "/political_influence"
  },
  {
  "hour": "2",
  "page": "Design",
  "views": this.design_p,
  "key": "/political_influence"
  },
  {
  "hour": "3",
  "page": "Implementation",
  "views": this.implement_p,
  "key": "/political_influence"
  },
  {
  "hour": "4",
  "page": "Verification",
  "views": this.verify_p,
  "key": "/political_influence"
  },
  {
  "hour": "5",
  "page": "Operations",
  "views": this.operate_p,
  "key": "/political_influence"
  },
  ],
  ];
*/

var posit = (data.governance + data.design + data.implementation + data.verification + data.operational) * 0.2;
var negat = 3 - posit;

var over_posit = posit.toFixed(2);
var over_negat = negat.toFixed(2);




  var corona=[

    [
      {
      "hour": "0",
      "page": "Readiness Gap",
      "views": over_negat,
      "key": "/download/radial-progress-source-code"
      },
      {
      "hour": "1",
      "page": "GOVERNANCE",
      "views": 3 - data.governance,
      "key": "/download/radial-progress-source-code"
      },
      {
      "hour": "2",
      "page": "DESIGN",
      "views": 3 - data.design,
      "key": "/download/radial-progress-source-code"
      },
      {
      "hour": "3",
      "page": "IMPLEMENTATION",
      "views": 3 - data.implementation,
      "key": "/download/radial-progress-source-code"
      },
      {
      "hour": "4",
      "page": "VERIFICATION",
      "views": 3 - data.verification,
      "key": "/download/radial-progress-source-code"
      },
      {
      "hour": "5",
      "page": "OPERATIONS",
      "views": 3- data.operational,
      "key": "/download/radial-progress-source-code"
      }
      ],

    [
      {
      "hour": "0",
      "page": "Readiness Achieved",
      "views": over_posit,
      "key": "/political_influence"
      },
      {
      "hour": "1",
      "page": "GOVERNANCE",
      "views": data.governance,
      "key": "/political_influence"
      },
      {
      "hour": "2",
      "page": "DESIGN",
      "views": data.design,
      "key": "/political_influence"
      },
      {
      "hour": "3",
      "page": "IMPLEMENTATION",
      "views": data.implementation,
      "key": "/political_influence"
      },
      {
      "hour": "4",
      "page": "VERIFICATION",
      "views": data.verification,
      "key": "/political_influence"
      },
      {
      "hour": "5",
      "page": "OPERATIONS",
      "views": data.operational,
      "key": "/political_influence"
      },
      ]
    ];
  console.log(corona)

viz.data(corona)
     .width('100%')
     .height('100%')
     .outerRadius('42%')
     .innerRadius('28%')
     .y(function(d: any, i: any) {
         return d.views;                     // Value to use for the radius (y)
     })
     .x(function(d: any, i: any) {
         return d.hour;                      // Value to use for the angle (x)
     })
     .seriesLabel(function(d: any) { return d.page; })
     .xTickFormat(function(d: any) { return convertTime(d); })
     .xTickCount(6)
     .yTickFormat(function(d: any) { return d + ' metrics'; })
     .yTickCount(5)
     .on('mouseover', onMouseOver)         // Called on each datatip mouseover
     .on('mouseout', onMouseOut);          // Called on each datatip mouseout

     
// viz.style('area-fill', 'rgba(31, 58, 147, 0.5)');
viz.style('line-stroke', '#69448f');
viz.style('line-opacity', 1);
viz.style('axis-opacity', 0.2);
viz.style('axis-stroke', '#0000FF');
viz.style('area-fill-opacity', 0.9);
viz.style('axis-font-size', '23');
viz.style('line-stroke-over', 'transparent');
viz.style('background-opacity', 0);
viz.style('label-color', 'azure');
viz.update();


// Formats the time labels for yAxis
function convertTime(h: any) {
     
    if ( h == 0 ) { return ('Overall'); }
    if ( h == 1 ) { return ('Governance'); }
    if ( h == 2 ) { return ('Design'); }
    if ( h == 3 ) { return ('Implementation'); }
    if ( h == 4 ) { return ('Verification'); }
    if ( h == 5 ) { return ('Operations'); }
}


function onMouseOver(d: any, i: any) {
  $('#chartdiv_rtc').css('opacity', '0.2');
  console.log('over');

}

function onMouseOut(d: any, i: any) {
  $('#chartdiv_rtc').css('opacity', '1');
  console.log('out');
}

});


  $('#viz_container').mousemove(function(e) {
    // tslint:disable: variable-name

    const left = e.pageX - $('#mid_left_line').offset().left;

    const top = e.pageY - $('#mid_top_line').offset().top;

    const right = e.pageX - $('#mid_right_line').offset().left;

    const bottom = e.pageY - $('#mid_bottom_line').offset().top;

    if (left > 0 && top > 0 && right < 0 && bottom < 0 ) {
      $('#chartdiv_rtc').css('z-index', '0' );
    } else {
      $('#chartdiv_rtc').css('z-index', '-1' );
    }

  //  console.log(left, top, right, bottom);
  });
});

}

}
