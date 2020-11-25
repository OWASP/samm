import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent} from '../app/index/index.component';
import { NavComponent} from './usermanage/nav/nav.component';
import { ReportComponent } from './report/report.component';
import { Component } from '@syncfusion/ej2-base';
import { AuthServices } from './authservice';
import { AuthGuard } from './auth.guard';
import { UserprofileComponent} from './userprofile/userprofile.component';

import { HomeComponent } from './home/home.component';
// import { PageComponent } from './access-brac/page.component';

import { GSMPageComponent } from './governance_sm/page.component';
import { GPCPageComponent } from './governance_pc/page.component';
import { GEGPageComponent } from './governance_eg/page.component';
import { DETPageComponent } from './design_threat/page.component';
import { DSEPageComponent } from './design_security/page.component';
import { DSAPageComponent } from './design_secure_arch/page.component';
import { HomeNewComponent } from './home-new/home-new.component';

import { IMPPageComponent } from './implement_defect/page.component';
import { ISBPageComponent } from './implement_secure_build/page.component';
import { ISDPageComponent } from './implement_secure_deploy/page.component';
import { OETPageComponent } from './operate_environment/page.component';
import { OICPageComponent } from './operate_incident/page.component';
import { OOPEPageComponent } from './operate_operational/page.component';
import { VERIPageComponent } from './verify_arch/page.component';
import { VEREPageComponent } from './verify_requirement/page.component';
import { VERSPageComponent } from './verify_security/page.component';
const routes: Routes = [
  {
    path: 'governance_strategy',
    component: GSMPageComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'governance_policy',
    component: GPCPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'governance_education',
    component: GEGPageComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'design_threat',
    component: DETPageComponent ,
    canActivate: [AuthGuard]
  },
  {
    path: 'design_security',
    component: DSEPageComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'design_secure_arch',
    component: DSAPageComponent ,
    canActivate: [AuthGuard]
  },
  {
    path: 'verify_security',
    component:  VERSPageComponent,
    canActivate: [AuthGuard]
    },
  {
    path: 'verify_requirement',
    component:  VEREPageComponent,
    canActivate: [AuthGuard]
    },
  {
    path: 'verify_arch',
    component:  VERIPageComponent,
    canActivate: [AuthGuard]
    },
  {
    path: 'operate_operational',
    component:  OOPEPageComponent,
    canActivate: [AuthGuard]
    },
  {
    path: 'operate_incident',
    component:  OICPageComponent,
    canActivate: [AuthGuard]
    },
  {
    path: 'operate_environment',
    component:  OETPageComponent,
    canActivate: [AuthGuard]
    },
  {
    path: 'implement_secure_deploy',
    component:  ISDPageComponent,
    canActivate: [AuthGuard]
    },
  {
    path: 'implement_secure_build',
    component:  ISBPageComponent,
    canActivate: [AuthGuard]
    },
  {
    path: 'implement_defect',
    component:  IMPPageComponent,
    canActivate: [AuthGuard]
    },
  {
    path: 'home_new',
    component:  HomeNewComponent,
    canActivate: [AuthGuard]
    },
  {
    path: 'index',
    component:  IndexComponent
    },
  
  {
   path: 'home',
   component:  HomeComponent,
   canActivate: [AuthGuard]
   },
  {
    path: 'report',
    component:  ReportComponent,
    canActivate: [AuthGuard]
   },
      {
    path: 'usermanage',
     component: NavComponent,
    canActivate: [AuthGuard]
   },
  
 
  
 { path: 'userprofile', component: UserprofileComponent  },


  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
