import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.services';
import { Router } from '@angular/router';

declare const mina: any;
declare function Snap(a: any): any;

@Component({
  selector: 'app-scorecards',
  templateUrl: './scorecards.component.html',
  styleUrls: ['./scorecards.component.scss']
})
export class ScorecardsComponent implements OnInit {
  hr1: {}; hr2: {}; hr3: {}; hr4: {}; hr5: {}; hr6 : {}; hr7: {}; hr8: {}; hr9: {}; hr10: {}; hr11: {}; hr12: {}; hr13: {}; hr14: {};
  access: {};
  access1: {};
  info: {};
  one: {};
  human: {};
  human1: {};
  asset: {};
  asset1: {};
  commu: {};
  commu1: {};
  comp: {};
  comp1: {};
  crypto: {};
  crypto1: {};
  infor: {};
  infor1: {};
  sec: {};
  sec1: {};
  ope: {};
  ope1: {};
  org: {};
  org1: {};
  phy: {};
  phy1: {};
  sup: {};
  sup1: {};
  sys: {};
  sys1: {};
// tslint:disable: variable-name
// tslint:disable: no-shadowed-variable
// tslint:disable: only-arrow-functions

constructor(private authService: AuthService, private router: Router) {}

strategy_rating:any;
strategy_rating_load:any;
education_rating:any;
education_rating_load:any;
policy_rating:any;
policy_rating_load:any;
threat_rating:any;
threat_rating_load:any;
security_rating:any;
security_rating_load:any;
secure_arch_rating:any;
secure_arch_rating_load:any;
defect_rating:any;
defect_rating_load:any;
secure_build_rating:any;
secure_build_rating_load:any;
secure_deploy_rating:any;
secure_deploy_rating_load:any;
verify_arch_rating:any;
verify_arch_rating_load:any;
verify_requirement_rating:any;
verify_requirement_rating_load:any;
verify_security_rating:any;
verify_security_rating_load:any;
operate_environment_rating:any;
operate_environment_rating_load:any;
operate_incident_rating:any;
operate_incident_rating_load:any;
operate_operational_rating:any;
operate_operational_rating_load:any;
  ngOnInit() {
    // hours
    this.authService.firstgraph().subscribe(data=>{
      //console.log(data);
      this.education_rating=data.education_rating;
      this.education_rating_load=600 * (data.education_rating / 3);
      console.log(this.education_rating_load)
      this.strategy_rating=data.strategy_rating;
      this.strategy_rating_load=600 * (data.strategy_rating / 3);
      this.policy_rating=data.policy_rating;
      this.policy_rating_load=600 * (data.policy_rating / 3);
      this.threat_rating=data.threat_rating;
      this.threat_rating_load=600 * (data.threat_rating/3);
      this.security_rating=data.security_rating;
      this.security_rating_load=600 * (data.security_rating/3);
      this.secure_arch_rating=data.secure_arch_rating;
      this.secure_arch_rating_load=600 * (data.secure_arch_rating/3);
      this.defect_rating=data.defect_rating;
      this.defect_rating_load=600 * (data.defect_rating/3);
      this.secure_build_rating=data.secure_build_rating;
      this.secure_build_rating_load=600 * (data.secure_build_rating/3);
      this.secure_deploy_rating=data.secure_deploy_rating;
      this.secure_deploy_rating_load=600 * (data.secure_deploy_rating/3);
      this.verify_arch_rating=data.verify_arch_rating;
      this.verify_arch_rating_load=600 * (data.verify_arch_rating/3);
      this.verify_requirement_rating=data.verify_requirement_rating;
      this.verify_requirement_rating_load=600 * (data.verify_requirement_rating/3);
      this.verify_security_rating=data.verify_security_rating;
      this.verify_security_rating_load=600 * (data.verify_security_rating/3);
      this.operate_environment_rating=data.operate_environment_rating;
      this.operate_environment_rating_load=600 * (data.operate_environment_rating/3);
      this.operate_incident_rating=data.operate_incident_rating;
      this.operate_incident_rating_load=600 * (data.operate_incident_rating/3);
      this.operate_operational_rating=data.operate_operational_rating;
      this.operate_operational_rating_load=600 * (data.operate_operational_rating/3);
      //console.log(this.strategy_rating);
    })
const chart_1_y = [
        15, 20, 100
      ];
const chart_2_y = [
        80, 65, 30
      ];
const chart_3_y = [
        80, 15, 30
      ];
const chart_4_y = [
        80, 65, 30
      ];
const chart_5_y = [
        80, 65, 90
      ];
const chart_6_y = [
        80, 65, 10
      ];
const chart_7_y = [
        80, 65, 30
      ];

function point() {
        // tslint:disable: label-position
        // tslint:disable: no-unused-expression
          x : 0;
          y : 0;
    }



function drawLineGraph(graph: any, points: any, container: any, id: any) {


      graph = Snap(graph);

     // END DRAW GRID

     // PARSE POINTS
      const myPoints = [];

      function parseData(points: any) {
         for (let i = 0; i < points.length; i++) {
           const p = new point();
           const pv = points[i] / 100 * 40;
           p.x = 83.7 / points.length * i + 1;
           p.y = 40 - pv;
           if (p.x > 78) {
                 p.x = 78;
             }
           myPoints.push(p);
         }
     }

      const segments = [];

      function createSegments(p_array: any) {
         for (let i = 0; i < p_array.length; i++) {
           let seg = 'L' + p_array[i].x + ',' + p_array[i].y;
           if (i === 0) {
                 seg = 'M' + p_array[i].x + ',' + p_array[i].y;
             }
           segments.push(seg);
         }
     }


      function calculatePercentage(points: any, graph: any) {
       const initValue = points[0];
       const endValue = points[points.length - 1];
       const sum = endValue - initValue;
       let prefix: any;
       let percentageGain: any;

       function findPrefix() {
             if (sum > 0) {
                 prefix = '+';
             } else {
                 prefix = '';
             }
         }

       let percentagePrefix = '';

       function percentageChange() {
             percentageGain = initValue / endValue * 100;

             if (percentageGain > 100) {
              // console.log('over100');
               percentageGain = Math.round(percentageGain * 100 * 10) / 100;
             } else if (percentageGain < 100) {
              // console.log('under100');
               percentageGain = Math.round(percentageGain * 10) / 10;
             }
             if (initValue > endValue) {

                 percentageGain = endValue / initValue * 100 - 100;
                 percentageGain = percentageGain.toFixed(2);

                 percentagePrefix = '';
                 $(graph).find('.percentage-value').addClass('negative');
             } else {
                 percentagePrefix = '+';
             }
             if (endValue > initValue) {
               percentageGain = endValue / initValue * 100;
               percentageGain = Math.round(percentageGain);
           }
         }
       percentageChange();
       findPrefix();

       const percentage = $(graph).find('.percentage-value');
       const totalGain = $(graph).find('.total-gain');
       const hVal = $(graph).find('.h-value');

       function count(graph: any, sum: any) {
         const totalGain = $(graph).find('.total-gain');
         let i = 0;
         const time = 1300;
         const intervalTime = Math.abs(time / sum);
         let timerID: any;
         if (sum > 0) {
                     timerID = setInterval(function() {
                     i++;
                     totalGain.text(percentagePrefix + i);
                     if (i === sum) { clearInterval(timerID); }
                 }, intervalTime);
             } else if (sum < 0) {
                    timerID = setInterval(function() {
                      i--;
                      totalGain.text(percentagePrefix + i);
                      if (i === sum) { clearInterval(timerID); }
                 }, intervalTime);
             }
         }
       count(graph, sum);

       percentage.text(percentagePrefix + percentageGain + '%');
       totalGain.text('0%');

       setTimeout(function() {
             percentage.addClass('visible');
             hVal.addClass('visible');
         }, 1300);

     }


      function showValues() {
       const val1 = $(graph).find('.h-value');
       const val2 = $(graph).find('.percentage-value');
       val1.addClass('visible');
       val2.addClass('visible');
     }

      parseData(points);

      createSegments(myPoints);
      calculatePercentage(points, container);

    }

window.onload = () => {

    drawLineGraph('#chart-1', chart_1_y, '#graph-1-container', 1);
    drawLineGraph('#chart-2', chart_2_y, '#graph-2-container', 2);
    drawLineGraph('#chart-3', chart_3_y, '#graph-3-container', 3);
    drawLineGraph('#chart-4', chart_4_y, '#graph-4-container', 4);
    drawLineGraph('#chart-5', chart_5_y, '#graph-5-container', 5);
    drawLineGraph('#chart-6', chart_6_y, '#graph-6-container', 6);
    drawLineGraph('#chart-7', chart_7_y, '#graph-7-container', 7);
    drawLineGraph('#chart-8', chart_1_y, '#graph-8-container', 8);
    drawLineGraph('#chart-9', chart_3_y, '#graph-9-container', 9);
    drawLineGraph('#chart-10', chart_5_y, '#graph-10-container', 10);
    drawLineGraph('#chart-11', chart_7_y, '#graph-11-container', 11);
    drawLineGraph('#chart-12', chart_2_y, '#graph-12-container', 12);
    drawLineGraph('#chart-13', chart_6_y, '#graph-13-container', 13);
    drawLineGraph('#chart-14', chart_1_y, '#graph-14-container', 14);

    };


    }


}
