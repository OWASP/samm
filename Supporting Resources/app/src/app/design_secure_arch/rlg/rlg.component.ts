import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
declare function RadarChart(a: any, b: any, c: any): any;
declare const d4: any;

@Component({
  selector: 'DSA-rlg',
  templateUrl: './rlg.component.html',
  styleUrls: ['./rlg.component.scss'],
  providers: [AuthService]
})
export class DSARlgComponent implements OnInit {
  Architecture_Design_l1:any;
  Architecture_Design_l2:any;
  Architecture_Design_l3:any;
  Technology_Management_l1:any;
  Technology_Management_l2:any;
  Technology_Management_l3:any;
  constructor(private zone: NgZone, private authService: AuthService) {}

  ngOnInit() {

    this.authService.thirdgraph().subscribe(
      res => {
console.log(res)
       this.Architecture_Design_l1 = res.Architecture_Design_l1;
       this.Architecture_Design_l2 = res.Architecture_Design_l2;
       this.Architecture_Design_l3=res.Architecture_Design_l3;
       this.Technology_Management_l1=res.Technology_Management_l1;
       this.Technology_Management_l2=res.Technology_Management_l2;
       this.Technology_Management_l3=res.Technology_Management_l3;
       

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
          [// Architecture Design
            {axis:'Level1', value: this.Architecture_Design_l1},
           // {axis:'Technology Management', value: this.Technology_Management_l1}
            {axis:'Level2', value: this.Architecture_Design_l2},
            {axis:'Level3', value: this.Architecture_Design_l3},
            
            
            ], [// Technology Management
              //{axis:'Level', value: this.Architecture_Design_l2},
              {axis:'Level1', value: this.Technology_Management_l1},
              {axis:'Level2', value: this.Technology_Management_l2},
              {axis:'Level3', value: this.Technology_Management_l3}
          ],
          
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
    this.Technology_Management_l1 = err.error.message;
  }
);
  }


}
