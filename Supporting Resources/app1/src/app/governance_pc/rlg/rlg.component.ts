import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
declare function RadarChart(a: any, b: any, c: any): any;
declare const d4: any;

@Component({
  selector: 'GPC-rlg',
  templateUrl: './rlg.component.html',
  styleUrls: ['./rlg.component.scss'],
  providers: [AuthService]
})
export class GPCRlgComponent implements OnInit {
  Policy_and_Standards_l1:any;
  Policy_and_Standards_l2:any;
  Policy_and_Standards_l3:any;
  Compliance_Management_l1:any;
  Compliance_Management_l2:any;
  Compliance_Management_l3:any;
  constructor(private zone: NgZone, private authService: AuthService) {}

  ngOnInit() {

    this.authService.thirdgraph().subscribe(
      res => {
//console.log(res)
       this.Policy_and_Standards_l1 = res.Policy_and_Standards_l1;
       this.Policy_and_Standards_l2 = res.Policy_and_Standards_l2;
       this.Policy_and_Standards_l3=res.Policy_and_Standards_l3;
       this.Compliance_Management_l1=res.Compliance_Management_l1;
       this.Compliance_Management_l2=res.Compliance_Management_l2;
       this.Compliance_Management_l3=res.Compliance_Management_l3;
       

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
          [// Policy_and_Standards
            {axis:'Level1', value: this.Policy_and_Standards_l1},
            {axis:'Level2', value: this.Policy_and_Standards_l2},
            {axis:'Level3', value: this.Policy_and_Standards_l3},
            
            
            ], [// Compliance_Management
              {axis:'Level1', value: this.Compliance_Management_l1},
             {axis:'Level2', value: this.Compliance_Management_l2},
             {axis:'Level3', value: this.Compliance_Management_l3}
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
    this.Compliance_Management_l1 = err.error.message;
  }
);
  }


}
