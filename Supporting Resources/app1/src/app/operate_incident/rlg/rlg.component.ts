import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
declare function RadarChart(a: any, b: any, c: any): any;
declare const d4: any;

@Component({
  selector: 'OIC-rlg',
  templateUrl: './rlg.component.html',
  styleUrls: ['./rlg.component.scss'],
  providers: [AuthService]
})
export class OICRlgComponent implements OnInit {
  Incident_Detection_l1:any;
  Incident_Detection_l2:any;
  Incident_Detection_l3:any;
  Incident_Response_l1:any;
  Incident_Response_l2:any;
  Incident_Response_l3:any;
  constructor(private zone: NgZone, private authService: AuthService) {}

  ngOnInit() {
//console.log('hi');
    this.authService.thirdgraph1().subscribe(
      res => {

       this.Incident_Detection_l1 = res.Incident_Detection_l1;
       this.Incident_Detection_l2 = res.Incident_Detection_l2;
       this.Incident_Detection_l3=res.Incident_Detection_l3;
       this.Incident_Response_l1=res.Incident_Response_l1;
       this.Incident_Response_l2=res.Incident_Response_l2;
       this.Incident_Response_l3=res.Incident_Response_l3;
       

          /* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */

			//////////////////////////////////////////////////////////////
			//////////////////////// Set-Up //////////////////////////////
			//////////////////////////////////////////////////////////////

      // tslint:disable-next-line: one-variable-per-declaration
       const margin = {top: 80, right: 64, bottom: 50, left: 64},
      width = Math.min(312, window.innerWidth - 10) - margin.left - margin.right,
      height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

    //////////////////////////////////////////////////////////////
    ////////////////////////// Data //////////////////////////////
    //////////////////////////////////////////////////////////////

       const data = [
          [// Incident_Detection
            {axis:'Level1', value: this.Incident_Detection_l1},
           // {axis:'Threat Modeling', value: this.Incident_Response_l1}
           {axis:'Level2', value: this.Incident_Detection_l2},
            {axis:'Level3', value: this.Incident_Detection_l3},
            
            
            ], [// Incident_Response
              //{axis:'Application Risk Profile', value: this.Incident_Detection_l2},
              {axis:'Level1', value: this.Incident_Response_l1},
              {axis:'Level2', value: this.Incident_Response_l2},
              {axis:'Level3', value: this.Incident_Response_l3}
          ]
            ];
    //////////////////////////////////////////////////////////////
    //////////////////// Draw the Chart //////////////////////////
    //////////////////////////////////////////////////////////////

       const color = d4.scale.ordinal()
      .range(['#019dae', '#c63a46']);

       const radarChartOptions = {
      w: width,
      h: height,
      margin,
      maxValue: 0.5,
      levels: 5,
      roundStrokes: true,
      color
    };
    // Call function to draw the Radar chart
       RadarChart('.radarChart', data, radarChartOptions);

  },
  err => {
    this.Incident_Response_l1 = err.error.message;
  }
);
  }


}
