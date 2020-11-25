import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
declare function RadarChart(a: any, b: any, c: any): any;
declare const d4: any;

@Component({
  selector: 'DSE-rlg',
  templateUrl: './rlg.component.html',
  styleUrls: ['./rlg.component.scss'],
  providers: [AuthService]
})
export class DSERlgComponent implements OnInit {
  Software_Requirements_l1:any;
  Software_Requirements_l2:any;
  Software_Requirements_l3:any;
  Supplier_Security_l1:any;
  Supplier_Security_l2:any;
  Supplier_Security_l3:any;
  constructor(private zone: NgZone, private authService: AuthService) {}

  ngOnInit() {

    this.authService.thirdgraph().subscribe(
      res => {
console.log(res)
       this.Software_Requirements_l1 = res.Software_Requirements_l1;
       this.Software_Requirements_l2 = res.Software_Requirements_l2;
       this.Software_Requirements_l3=res.Software_Requirements_l3;
       this.Supplier_Security_l1=res.Supplier_Security_l1;
       this.Supplier_Security_l2=res.Supplier_Security_l2;
       this.Supplier_Security_l3=res.Supplier_Security_l3;
       

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
          [// Software Requirements
            {axis:'Level1', value: this.Software_Requirements_l1},
           // {axis:'Supplier Security', value: this.Supplier_Security_l1}
            {axis:'Level2', value: this.Software_Requirements_l2},
            {axis:'Level3', value: this.Software_Requirements_l3},
            
            
            ], [// Supplier Security
              //{axis:'Software Requirements', value: this.Software_Requirements_l2},
              {axis:'Level1', value: this.Supplier_Security_l1},
              {axis:'Level2', value: this.Supplier_Security_l2},
              {axis:'Level3', value: this.Supplier_Security_l3}
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
    this.Supplier_Security_l1 = err.error.message;
  }
);
  }


}
