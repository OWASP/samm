import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'GPC-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss']
})
export class GPCChartCardComponent implements OnInit {
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
  month_pre:any;
  month_before_1:any;
  month_before_2:any;
  score_cur:any;
  score_before_1:any;
  score_before_2:any;
  Policy_and_Standards_l1:any;
  Policy_and_Standards_l2:any;
  Policy_and_Standards_l3:any;
  Compliance_Management_l1:any;
  Compliance_Management_l2:any;
  Compliance_Management_l3:any;
  brac: {};
  sac: {};
  uam: {};
   ur: {}; 
   totalscore: {};
   brac1: {};
   brac2: {};
   sac1: {};
   sac2: {};
   sac3: {};
   sac4: {};
   sac5: {};
   uam1: {};
   uam2: {};
   uam3: {};
   uam4: {};
   uam5: {};
   uam6: {};
   ur1: {};
  brac_yes: {};
  brac_no: {}; 
  sac_yes: {};
  sac_no: {};
  uam_yes: {};
  uam_no: {};
  ur_yes: {};
  ur_no: {};
  v1: {}; v2: {}; v3: {}; v4: {}; v5: {}; v6: {}; v7: {}; v8: {}; v9:{}; v10: {}; v11: {}; v12: {}; v13: {}; v14: {}; v15: {}; v16: {}; v17: {};
  v18: {}; v19: {}; v20: {}; v21: {}; v22: {}; v23: {}; v24: {}; v25: {}; v26: {};  v27: {}; v28: {}; v29: {}; v30: {}; current_total: {}; current_no: {}; current_yes: {};
  // tslint:disable-next-line:max-line-length
  previous_month: {}; d1: {}; d2: {}; d3: {}; d4: {}; d5: {}; d6: {}; d7: {}; d8: {}; d9: {}; d10: {}; d11: {};d12: {};d13: {}; d14: {}; d15: {}; d16: {}; d17: {}; d18: {}; d19: {}; d20: {};d21: {};d22:{};d23: {}; d24: {}; d25: {}; d26: {}; d27: {}; d28: {}; d29: {};d30: {};
  
    // tslint:disable: only-arrow-functions
  
    constructor(private authService: AuthService) { } 
  
    ngOnInit() {
      this.authService.fourthgraph({'secpractice':'Policy & Compliance'}).subscribe( 
        res => {
      this.month_pre=res.month_pre;
      this.month_before_1=res.month_before_1;
      this.month_before_2=res.month_before_2;
      this.score_cur=res.score_cur;
      this.score_before_1=res.score_before_1;
      this.score_before_2=res.score_before_2;
    },
    err => {
      this.v1 = err.error.message;
    }
      );
      this.authService.thirdgraph().subscribe(
        res => {
  
          this.Policy_and_Standards_l1 = res.Policy_and_Standards_l1;
       this.Policy_and_Standards_l2 = res.Policy_and_Standards_l2;
       this.Policy_and_Standards_l3=res.Policy_and_Standards_l3;
       this.Compliance_Management_l1=res.Compliance_Management_l1;
       this.Compliance_Management_l2=res.Compliance_Management_l2;
       this.Compliance_Management_l3=res.Compliance_Management_l3;
         
    },
    err => {
      this.brac_no = err.error.message;
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
          this.defect_rating=res.defect_rating;;
          this.secure_build_rating=res.secure_build_rating;
          this.secure_deploy_rating=res.secure_deploy_rating;
          this.verify_arch_rating=res.verify_arch_rating;
          this.verify_requirement_rating=res.verify_requirement_rating;
          this.verify_security_rating=res.verify_security_rating;
          this.operate_environment_rating=res.operate_environment_rating;
          this.operate_incident_rating=res.operate_incident_rating;
          this.operate_operational_rating=res.operate_operational_rating;
        },
        err => {
          this.strategy_rating = err.error.message;
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
      this.strategy_rating=res.strategy_rating;
      this.education_rating=res.education_rating;
      this.policy_rating=res.policy_rating;
       
      },
      err => {
        this.brac = err.error.message;
      });
    }

}
