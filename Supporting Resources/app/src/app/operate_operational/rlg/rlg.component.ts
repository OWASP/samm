import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
declare function RadarChart(a: any, b: any, c: any): any;
declare const d4: any;

@Component({
  selector: 'OOPE-rlg',
  templateUrl: './rlg.component.html',
  styleUrls: ['./rlg.component.scss'],
  providers: [AuthService]
})
export class OOPERlgComponent implements OnInit {
  Data_Protection_l1:any;
  Data_Protection_l2:any;
  Data_Protection_l3:any;
  System_decommissioningLegacy_management_l1:any;
  System_decommissioningLegacy_management_l2:any;
  System_decommissioningLegacy_management_l3:any;
  constructor(private zone: NgZone, private authService: AuthService) {}

  ngOnInit() {

    this.authService.thirdgraph().subscribe(
      res => {
console.log(res)
       this.Data_Protection_l1 = res.Data_Protection_l1;
       this.Data_Protection_l2 = res.Data_Protection_l2;
       this.Data_Protection_l3=res.Data_Protection_l3;
       this.System_decommissioningLegacy_management_l1=res.System_decommissioningLegacy_management_l1;
       this.System_decommissioningLegacy_management_l2=res.System_decommissioningLegacy_management_l2;
       this.System_decommissioningLegacy_management_l3=res.System_decommissioningLegacy_management_l3;
       

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
          [// Data_Protection
            {axis:'Level1', value: this.Data_Protection_l1},
           // {axis:'Threat Modeling', value: this.System_decommissioningLegacy_management_l1}
           {axis:'Level2', value: this.Data_Protection_l2},
            {axis:'Level3', value: this.Data_Protection_l3},
            
            
            ], [// System_decommissioningLegacy_management
              //{axis:'Application Risk Profile', value: this.Data_Protection_l2},
              {axis:'Level1', value: this.System_decommissioningLegacy_management_l1},
              {axis:'Level2', value: this.System_decommissioningLegacy_management_l2},
              {axis:'Level3', value: this.System_decommissioningLegacy_management_l3}
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
    this.System_decommissioningLegacy_management_l1 = err.error.message;
  }
);
  }


}
