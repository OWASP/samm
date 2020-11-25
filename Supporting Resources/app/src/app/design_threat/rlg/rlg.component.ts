import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
declare function RadarChart(a: any, b: any, c: any): any;
declare const d4: any;

@Component({
  selector: 'DET-rlg',
  templateUrl: './rlg.component.html',
  styleUrls: ['./rlg.component.scss'],
  providers: [AuthService]
})
export class DETRlgComponent implements OnInit {
  Application_Risk_Profile_l1:any;
  Application_Risk_Profile_l2:any;
  Application_Risk_Profile_l3:any;
  Threat_Modeling_l1:any;
  Threat_Modeling_l2:any;
  Threat_Modeling_l3:any;
  constructor(private zone: NgZone, private authService: AuthService) {}

  ngOnInit() {

    this.authService.thirdgraph().subscribe(
      res => {
console.log(res)
       this.Application_Risk_Profile_l1 = res.Application_Risk_Profile_l1;
       this.Application_Risk_Profile_l2 = res.Application_Risk_Profile_l2;
       this.Application_Risk_Profile_l3=res.Application_Risk_Profile_l3;
       this.Threat_Modeling_l1=res.Threat_Modeling_l1;
       this.Threat_Modeling_l2=res.Threat_Modeling_l2;
       this.Threat_Modeling_l3=res.Threat_Modeling_l3;
       

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
          [// Application Risk Profile
            {axis:'Level1', value: this.Application_Risk_Profile_l1},
           // {axis:'Threat Modeling', value: this.Threat_Modeling_l1}
           {axis:'Level2', value: this.Application_Risk_Profile_l2},
            {axis:'Level3', value: this.Application_Risk_Profile_l3},
            
            
            ], [// Threat Modeling
              //{axis:'Application Risk Profile', value: this.Application_Risk_Profile_l2},
              {axis:'Level1', value: this.Threat_Modeling_l1},
              {axis:'Level2', value: this.Threat_Modeling_l2},
              {axis:'Level3', value: this.Threat_Modeling_l3}
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
    this.Threat_Modeling_l1 = err.error.message;
  }
);
  }


}
