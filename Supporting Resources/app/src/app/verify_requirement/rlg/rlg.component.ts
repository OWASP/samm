import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
declare function RadarChart(a: any, b: any, c: any): any;
declare const d4: any;

@Component({
  selector: 'VERE-rlg',
  templateUrl: './rlg.component.html',
  styleUrls: ['./rlg.component.scss'],
  providers: [AuthService]
})
export class VERERlgComponent implements OnInit {
  Control_Verification_l1:any;
  Control_Verification_l2:any;
  Control_Verification_l3:any;
  MisuseAbuse_Testing_l1:any;
  MisuseAbuse_Testing_l2:any;
  MisuseAbuse_Testing_l3:any;
  constructor(private zone: NgZone, private authService: AuthService) {}

  ngOnInit() {

    this.authService.thirdgraph().subscribe(
      res => {
console.log(res)
       this.Control_Verification_l1 = res.Control_Verification_l1;
       this.Control_Verification_l2 = res.Control_Verification_l2;
       this.Control_Verification_l3=res.Control_Verification_l3;
       this.MisuseAbuse_Testing_l1=res.MisuseAbuse_Testing_l1;
       this.MisuseAbuse_Testing_l2=res.MisuseAbuse_Testing_l2;
       this.MisuseAbuse_Testing_l3=res.MisuseAbuse_Testing_l3;
       

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
          [// Control_Verification
            {axis:'Level1', value: this.Control_Verification_l1},
           // {axis:'Threat Modeling', value: this.MisuseAbuse_Testing_l1}
           {axis:'Level2', value: this.Control_Verification_l2},
            {axis:'Level3', value: this.Control_Verification_l3},
            
            
            ], [// MisuseAbuse_Testing
              //{axis:'Application Risk Profile', value: this.Control_Verification_l2},
              {axis:'Level1', value: this.MisuseAbuse_Testing_l1},
              {axis:'Level2', value: this.MisuseAbuse_Testing_l2},
              {axis:'Level3', value: this.MisuseAbuse_Testing_l3}
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
    this.MisuseAbuse_Testing_l1 = err.error.message;
  }
);
  }


}
