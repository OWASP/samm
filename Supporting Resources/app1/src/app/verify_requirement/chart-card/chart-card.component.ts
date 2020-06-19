import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'VERE-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss']
})
export class VEREChartCardComponent implements OnInit {
  strategy_rating: any;
  education_rating:any;
  policy_rating:any;

  threat_rating:any;
  security_rating:any;
  secure_arch_rating:any;
  
  defect_rating:any;
  secure_build_rating:any;
  secure_deploy_rating:any;
  
  verify_arch_rating:any;
  verify_requirement_rating:any;
  verify_security_rating:any;
  
  operate_environment_rating:any;
  operate_incident_rating:any;
  operate_operational_rating:any;

  Control_Verification_l1:any;
  Control_Verification_l2:any;
  Control_Verification_l3:any;
  MisuseAbuse_Testing_l1:any;
  MisuseAbuse_Testing_l2:any;
  MisuseAbuse_Testing_l3:any;
  month_pre:any;
  month_before_1:any;
  month_before_2:any;
  score_cur:any;
  score_before_1:any;
  score_before_2:any;
  totalscore:any;
  // tslint:disable-next-line:max-line-length
  previous_month: {}; d1: {}; d2: {}; d3: {}; d4: {}; d5: {}; d6: {}; d7: {}; d8: {}; d9: {}; d10: {}; d11: {};d12: {};d13: {}; d14: {}; d15: {}; d16: {}; d17: {}; d18: {}; d19: {}; d20: {};d21: {};d22:{};d23: {}; d24: {}; d25: {}; d26: {}; d27: {}; d28: {}; d29: {};d30: {};
  
    // tslint:disable: only-arrow-functions
  
    constructor(private authService: AuthService) { } 
  
    ngOnInit() {
      this.authService.fourthgraph({'secpractice':'Requirements Driven Testing'}).subscribe( 
        res => {
      this.month_pre=res.month_pre;
      this.month_before_1=res.month_before_1;
      this.month_before_2=res.month_before_2;
      this.score_cur=res.score_cur;
      this.score_before_1=res.score_before_1;
      this.score_before_2=res.score_before_2;
    },
    err => {
      
    }
      );
      this.authService.thirdgraph().subscribe(
        res => {
  
          this.Control_Verification_l1 = res.Control_Verification_l1;
          this.Control_Verification_l2 = res.Control_Verification_l2;
          this.Control_Verification_l3=res.Control_Verification_l3;
          this.MisuseAbuse_Testing_l1=res.MisuseAbuse_Testing_l1;
          this.MisuseAbuse_Testing_l2=res.MisuseAbuse_Testing_l2;
          this.MisuseAbuse_Testing_l3=res.MisuseAbuse_Testing_l3;
         
    },
    err => {
      this.Control_Verification_l1 = err.error.message;
    }
  );
      this.authService.secondgraph().subscribe(
        res => {
          this.strategy_rating=res.strategy_rating;
          this.education_rating=res.education_rating;
          this.policy_rating=res.policy_rating;
          this.threat_rating=res.threat_rating;
          this.security_rating=res.security_rating;
          this.secure_arch_rating=res.secure_arch_rating;
          this.defect_rating=res.defect_rating;
          this.secure_build_rating=res.secure_build_rating;
          this.secure_deploy_rating=res.secure_deploy_rating;
          this.verify_arch_rating=res.verify_arch_rating;
          this.verify_requirement_rating=res.verify_requirement_rating;
          this.verify_security_rating=res.verify_security_rating
          this.operate_environment_rating=res.operate_environment_rating;
          this.operate_incident_rating=res.operate_incident_rating;
          this.operate_operational_rating=res.operate_operational_rating;
  
        },
        err => {
          this.threat_rating = err.error.message;
        }
      );
  
  
  
      this.authService.scores().subscribe(
        res => {
        //  console.log(res.data);
          this.totalscore = res.data;
        },
        err => {
          this.totalscore = err.error.message;
        }
      );
      // chart values
      this.authService.firstgraph().subscribe(
      res => {
      //  console.log(res.pc);
      this.threat_rating=res.threat_rating;
      this.secure_arch_rating=res.secure_arch_rating;
      this.security_rating=res.security_rating;
       
      },
      err => {
        this.security_rating=err;
      });
    }

}
