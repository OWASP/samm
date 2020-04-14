import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
declare function RadarChart(a: any, b: any, c: any): any;
declare const d4: any;

@Component({
  selector: 'ISD-rlg',
  templateUrl: './rlg.component.html',
  styleUrls: ['./rlg.component.scss'],
  providers: [AuthService]
})
export class ISDRlgComponent implements OnInit {
  Deployment_Process_l1:any;
  Deployment_Process_l2:any;
  Deployment_Process_l3:any;
  Secret_Management_l1:any;
  Secret_Management_l2:any;
  Secret_Management_l3:any;
  constructor(private zone: NgZone, private authService: AuthService) {}

  ngOnInit() {

    this.authService.thirdgraph().subscribe(
      res => {
console.log(res)
       this.Deployment_Process_l1 = res.Deployment_Process_l1;
       this.Deployment_Process_l2 = res.Deployment_Process_l2;
       this.Deployment_Process_l3=res.Deployment_Process_l3;
       this.Secret_Management_l1=res.Secret_Management_l1;
       this.Secret_Management_l2=res.Secret_Management_l2;
       this.Secret_Management_l3=res.Secret_Management_l3;
       

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
          [// Deployment_Process
            {axis:'Level1', value: this.Deployment_Process_l1},
           // {axis:'Threat Modeling', value: this.Secret_Management_l1}
           {axis:'Level2', value: this.Deployment_Process_l2},
            {axis:'Level3', value: this.Deployment_Process_l3},
            
            
            ], [// Secret_Management
              //{axis:'Application Risk Profile', value: this.Deployment_Process_l2},
              {axis:'Level1', value: this.Secret_Management_l1},
              {axis:'Level2', value: this.Secret_Management_l2},
              {axis:'Level3', value: this.Secret_Management_l3}
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
    this.Secret_Management_l1 = err.error.message;
  }
);
  }


}
