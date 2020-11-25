import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
declare function RadarChart(a: any, b: any, c: any): any;
declare const d4: any;

@Component({
  selector: 'ISB-rlg',
  templateUrl: './rlg.component.html',
  styleUrls: ['./rlg.component.scss'],
  providers: [AuthService]
})
export class ISBRlgComponent implements OnInit {
  Build_Process_l1:any;
  Build_Process_l2:any;
  Build_Process_l3:any;
  Software_Dependencies_l1:any;
  Software_Dependencies_l2:any;
  Software_Dependencies_l3:any;
  constructor(private zone: NgZone, private authService: AuthService) {}

  ngOnInit() {

    this.authService.thirdgraph().subscribe(
      res => {
console.log(res)
       this.Build_Process_l1 = res.Build_Process_l1;
       this.Build_Process_l2 = res.Build_Process_l2;
       this.Build_Process_l3=res.Build_Process_l3;
       this.Software_Dependencies_l1=res.Software_Dependencies_l1;
       this.Software_Dependencies_l2=res.Software_Dependencies_l2;
       this.Software_Dependencies_l3=res.Software_Dependencies_l3;
       

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
          [// Build_Process
            {axis:'Level1', value: this.Build_Process_l1},
           // {axis:'Threat Modeling', value: this.Software_Dependencies_l1}
           {axis:'Level2', value: this.Build_Process_l2},
            {axis:'Level3', value: this.Build_Process_l3},
            
            
            ], [// Software_Dependencies
              //{axis:'Application Risk Profile', value: this.Build_Process_l2},
              {axis:'Level1', value: this.Software_Dependencies_l1},
              {axis:'Level2', value: this.Software_Dependencies_l2},
              {axis:'Level3', value: this.Software_Dependencies_l3}
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
    this.Software_Dependencies_l1 = err.error.message;
  }
);
  }


}
