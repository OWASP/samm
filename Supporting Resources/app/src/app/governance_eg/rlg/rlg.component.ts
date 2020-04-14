import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
declare function RadarChart(a: any, b: any, c: any): any;
declare const d4: any;

@Component({
  selector: 'GEG-rlg',
  templateUrl: './rlg.component.html',
  styleUrls: ['./rlg.component.scss'],
  providers: [AuthService]
})
export class GEGRlgComponent implements OnInit {
  Training_and_Awareness_l1:any;
  Training_and_Awareness_l2:any;
  Training_and_Awareness_l3:any;
  Organization_and_Culture_l1:any;
  Organization_and_Culture_l2:any;
  Organization_and_Culture_l3:any;
  constructor(private zone: NgZone, private authService: AuthService) {}

  ngOnInit() {

    this.authService.thirdgraph().subscribe(
      res => {
//console.log(res)
       this.Training_and_Awareness_l1 = res.Training_and_Awareness_l1;
       this.Training_and_Awareness_l2 = res.Training_and_Awareness_l2;
       this.Training_and_Awareness_l3=res.Training_and_Awareness_l3;
       this.Organization_and_Culture_l1=res.Organization_and_Culture_l1;
       this.Organization_and_Culture_l2=res.Organization_and_Culture_l2;
       this.Organization_and_Culture_l3=res.Organization_and_Culture_l3;
       

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
          [// Training_and_Awareness
            {axis:'Level1', value: this.Training_and_Awareness_l1},
            //{axis:'Level1', value: this.Organization_and_Culture_l1}
            {axis:'Level2', value: this.Training_and_Awareness_l2},
            {axis:'Level3', value: this.Training_and_Awareness_l3},
            
            
            ], [//Organization_and_Culture
             // {axis:'Level1', value: this.Training_and_Awareness_l2},
              {axis:'Level1', value: this.Organization_and_Culture_l2},
              {axis:'Level2', value: this.Organization_and_Culture_l2},
              {axis:'Level3', value: this.Organization_and_Culture_l3}
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
    this.Organization_and_Culture_l1 = err.error.message;
  }
);
  }


}
