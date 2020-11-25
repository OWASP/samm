import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
declare function RadarChart(a: any, b: any, c: any): any;
declare const d4: any;

@Component({
  selector: 'GSM-rlg',
  templateUrl: './rlg.component.html',
  styleUrls: ['./rlg.component.scss'],
  providers: [AuthService]
})
export class GSMRlgComponent implements OnInit {
  Create_and_Promote_l1:any;
  Create_and_Promote_l2:any;
  Create_and_Promote_l3:any;
  Measure_and_Improve_l1:any;
  Measure_and_Improve_l2:any;
  Measure_and_Improve_l3:any;
  constructor(private zone: NgZone, private authService: AuthService) {}

  ngOnInit() {

    this.authService.thirdgraph().subscribe(
      res => {
//console.log(res)
       this.Create_and_Promote_l1 = res.Create_and_Promote_l1;
       this.Create_and_Promote_l2 = res.Create_and_Promote_l2;
       this.Create_and_Promote_l3=res.Create_and_Promote_l3;
       this.Measure_and_Improve_l1=res.Measure_and_Improve_l1;
       this.Measure_and_Improve_l2=res.Measure_and_Improve_l2;
       this.Measure_and_Improve_l3=res.Measure_and_Improve_l3;
       

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
          [// Positive
            {axis:'Level1', value: this.Create_and_Promote_l1},
           // {axis:'Measure and Improve', value: this.Measure_and_Improve_l1}
            {axis:'Level2', value: this.Create_and_Promote_l2},
            {axis:'Level3', value: this.Create_and_Promote_l3},
            
            
            ], [// Negative
              //{axis:'Create and Promote', value: this.Create_and_Promote_l2},
              {axis:'Level1', value: this.Measure_and_Improve_l1},
              {axis:'Level2', value: this.Measure_and_Improve_l2},
             {axis:'Level3', value: this.Measure_and_Improve_l3}
          ]// {axis:'Measure and Improve', value: this.Measure_and_Improve_l3}
         
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
    this.Measure_and_Improve_l1 = err.error.message;
  }
);
  }


}
