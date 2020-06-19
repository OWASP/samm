// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule, MatDialogModule  } from '@angular/material';
import { MatDialogRef} from '@angular/material/dialog';
import { ChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatMenuModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ScrollSpyModule } from 'ngx-scrollspy';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CardsModule } from 'angular-bootstrap-md';
import {MaterialModule} from './material';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { NgChartjsModule } from 'ng-chartjs';
import { ColorPickerModule } from 'ngx-color-picker';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TooltipModule } from '@syncfusion/ej2-angular-popups';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatGridListModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
} from '@angular/material';
import { NgCircleProgressModule } from'ng-circle-progress';

import * as $ from 'jquery';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { InputsModule } from '@progress/kendo-angular-inputs';
import { MatStepperModule} from '@angular/material/';
import { RtcComponent } from './charts/rtc/rtc.component';
import { CoronaComponent } from './charts/corona/corona.component';
import { ScorecardsComponent } from './scorecards/scorecards.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home.component';
import { WtComponent } from './charts/wt/wt.component';
import { SsbComponent } from './charts/ssb/ssb.component';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { UserIdleModule } from 'angular-user-idle';
// Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// index
import { IndexComponent } from './index/index.component';
import { HeaderComponent} from './header/header.component';
import { ContentComponent} from './content/content/content.component';
// auth
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AuthServices } from './authservice';
import { AuthGuard } from './auth.guard';
import { MatCarouselModule } from '@ngmodule/material-carousel';


/************************************ Report  *****************************************/
import { ReportComponent } from './report/report.component';
import { RETablesComponent} from './report/tables/report-tables.component';

/************************************* User Manage  ***********************************/
import {UMDialogBoxComponent} from './usermanage/usermanage-dialog-box.component';
import {NavComponent} from './usermanage/nav/nav.component';
import {DialogNavComponent} from './usermanage/dialog-nav/dialog-nav.component';
import { DialogDesComponentComponent } from './usermanage/dialog-des-component/dialog-des-component.component';
import { from } from 'rxjs';

/***************************************  User profile *******************************************/
import { UserprofileComponent} from './userprofile/userprofile.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { FlipComponent } from './content/flip/flip.component';
// ----------------------------VSAMM GOVERNANCE STRATEGY------------------------------------------------------//
import { GSMPageComponent } from './governance_sm/page.component';
import {  GSMSgComponent } from './governance_sm/sg/sg.component';
import { GSMChartCardComponent } from './governance_sm/chart-card/chart-card.component';
import {  GSMDovaComponent } from './governance_sm/dova/dova.component';
import {  GSMRlgComponent } from './governance_sm/rlg/rlg.component';
import {  GSMFdtComponent } from './governance_sm/fdt/fdt.component';
import {  GSMTableComponent } from './governance_sm/tables/table/table.component';
import {  GSMPopupComponent } from './governance_sm/popup/popup.component';

//===========================VSAMM GOVERNANCE POLICY========================
import { GPCPageComponent } from './governance_pc/page.component';
import { GPCChartCardComponent } from './governance_pc/chart-card/chart-card.component';
import {  GPCDovaComponent } from './governance_pc/dova/dova.component';
import {  GPCRlgComponent } from './governance_pc/rlg/rlg.component';
import {  GPCTableComponent } from './governance_pc/tables/table/table.component';
import {  GPCPopupComponent } from './governance_pc/popup/popup.component';

//===========================VSAMM GOVERNANCE EDUCATION========================
import { GEGPageComponent } from './governance_eg/page.component';
import { GEGChartCardComponent } from './governance_eg/chart-card/chart-card.component';
import {  GEGDovaComponent } from './governance_eg/dova/dova.component';
import {  GEGRlgComponent } from './governance_eg/rlg/rlg.component';
import {  GEGTableComponent } from './governance_eg/tables/table/table.component';
import {  GEGPopupComponent } from './governance_eg/popup/popup.component';
// ----------------------------VSAMM DESIGN THREAT------------------------------------------------------//
import { DETPageComponent } from './design_threat/page.component';
import {  DETSgComponent } from './design_threat/sg/sg.component';
import { DETChartCardComponent } from './design_threat/chart-card/chart-card.component';
import {  DETDovaComponent } from './design_threat/dova/dova.component';
import {  DETRlgComponent } from './design_threat/rlg/rlg.component';
import {  DETTableComponent } from './design_threat/tables/table/table.component';
import {  DETPopupComponent } from './design_threat/popup/popup.component';
//===========================VSAMM DESIGN SECURITY========================
import { DSEPageComponent } from './design_security/page.component';
import { DSEChartCardComponent } from './design_security/chart-card/chart-card.component';
import {  DSEDovaComponent } from './design_security/dova/dova.component';
import {  DSERlgComponent } from './design_security/rlg/rlg.component';
import {  DSETableComponent } from './design_security/tables/table/table.component';
import {  DSEPopupComponent } from './design_security/popup/popup.component';
//===========================VSAMM DESIGN SECURE ARCH========================
import { DSAPageComponent } from './design_secure_arch/page.component';
import { DSAChartCardComponent } from './design_secure_arch/chart-card/chart-card.component';
import {  DSADovaComponent } from './design_secure_arch/dova/dova.component';
import {  DSARlgComponent } from './design_secure_arch/rlg/rlg.component';
import {  DSATableComponent } from './design_secure_arch/tables/table/table.component';
import {  DSAPopupComponent } from './design_secure_arch/popup/popup.component';
import { HomeNewComponent } from './home-new/home-new.component';

// ----------------------------VSAMM implement_defect------------------------------------------------------//
import { IMPPageComponent } from './implement_defect/page.component';
import {  IMPSgComponent } from './implement_defect/sg/sg.component';
import { IMPChartCardComponent } from './implement_defect/chart-card/chart-card.component';
import {  IMPDovaComponent } from './implement_defect/dova/dova.component';
import {  IMPRlgComponent } from './implement_defect/rlg/rlg.component';
import {  IMPTableComponent } from './implement_defect/tables/table/table.component';
import {  IMPPopupComponent } from './implement_defect/popup/popup.component';
//===========================VSAMM implement_secure_build========================
import { ISBPageComponent } from './implement_secure_build/page.component';
import { ISBChartCardComponent } from './implement_secure_build/chart-card/chart-card.component';
import {  ISBDovaComponent } from './implement_secure_build/dova/dova.component';
import {  ISBRlgComponent } from './implement_secure_build/rlg/rlg.component';
import {  ISBTableComponent } from './implement_secure_build/tables/table/table.component';
import {  ISBPopupComponent } from './implement_secure_build/popup/popup.component';
//===========================VSAMM implement_secure_deploy========================
import { ISDPageComponent } from './implement_secure_deploy/page.component';
import { ISDChartCardComponent } from './implement_secure_deploy/chart-card/chart-card.component';
import {  ISDDovaComponent } from './implement_secure_deploy/dova/dova.component';
import {  ISDRlgComponent } from './implement_secure_deploy/rlg/rlg.component';
import {  ISDTableComponent } from './implement_secure_deploy/tables/table/table.component';
import {  ISDPopupComponent } from './implement_secure_deploy/popup/popup.component';
// ----------------------------VSAMM operate_environment------------------------------------------------------//
import { OETPageComponent } from './operate_environment/page.component';
import {  OETSgComponent } from './operate_environment/sg/sg.component';
import { OETChartCardComponent } from './operate_environment/chart-card/chart-card.component';
import {  OETDovaComponent } from './operate_environment/dova/dova.component';
import {  OETRlgComponent } from './operate_environment/rlg/rlg.component';
import {  OETTableComponent } from './operate_environment/tables/table/table.component';
import {  OETPopupComponent } from './operate_environment/popup/popup.component';
//===========================VSAMM operate_incident========================
import { OICPageComponent } from './operate_incident/page.component';
import { OICChartCardComponent } from './operate_incident/chart-card/chart-card.component';
import {  OICDovaComponent } from './operate_incident/dova/dova.component';
import {  OICRlgComponent } from './operate_incident/rlg/rlg.component';
import {  OICTableComponent } from './operate_incident/tables/table/table.component';
import {  OICPopupComponent } from './operate_incident/popup/popup.component';
//===========================VSAMM operate_operational========================
import { OOPEPageComponent } from './operate_operational/page.component';
import { OOPEChartCardComponent } from './operate_operational/chart-card/chart-card.component';
import {  OOPEDovaComponent } from './operate_operational/dova/dova.component';
import {  OOPERlgComponent } from './operate_operational/rlg/rlg.component';
import {  OOPETableComponent } from './operate_operational/tables/table/table.component';
import {  OOPEPopupComponent } from './operate_operational/popup/popup.component';
// ----------------------------VSAMM verify_arch------------------------------------------------------//
import { VERIPageComponent } from './verify_arch/page.component';
import {  VERISgComponent } from './verify_arch/sg/sg.component';
import { VERIChartCardComponent } from './verify_arch/chart-card/chart-card.component';
import {  VERIDovaComponent } from './verify_arch/dova/dova.component';
import {  VERIRlgComponent } from './verify_arch/rlg/rlg.component';
import {  VERITableComponent } from './verify_arch/tables/table/table.component';
import {  VERIPopupComponent } from './verify_arch/popup/popup.component';
//===========================VSAMM verify_requirement========================
import { VEREPageComponent } from './verify_requirement/page.component';
import { VEREChartCardComponent } from './verify_requirement/chart-card/chart-card.component';
import {  VEREDovaComponent } from './verify_requirement/dova/dova.component';
import {  VERERlgComponent } from './verify_requirement/rlg/rlg.component';
import {  VERETableComponent } from './verify_requirement/tables/table/table.component';
import {  VEREPopupComponent } from './verify_requirement/popup/popup.component';
//===========================VSAMM verify_security========================
import { VERSPageComponent } from './verify_security/page.component';
import { VERSChartCardComponent } from './verify_security/chart-card/chart-card.component';
import {  VERSDovaComponent } from './verify_security/dova/dova.component';
import {  VERSRlgComponent } from './verify_security/rlg/rlg.component';
import {  VERSTableComponent } from './verify_security/tables/table/table.component';
import {  VERSPopupComponent } from './verify_security/popup/popup.component';
@NgModule({
  declarations: [
      // ---------------------------------------------------------- ACCESS-BRAC
      
     AppComponent,
     IndexComponent,
     ContentComponent,
     HeaderComponent,
     UserprofileComponent,
     // usermanage
     NavComponent,
     UMDialogBoxComponent,
     DialogNavComponent,
     DialogDesComponentComponent,
     // report
     ReportComponent,
     RETablesComponent,
     // home
     AppComponent,
    RtcComponent,
    RadarChartComponent,
    CoronaComponent,
    ScorecardsComponent,
    SidenavComponent,
    TopnavComponent,
    HomeComponent,
   WtComponent,
    SsbComponent,
   
   FlipComponent,
   
   // ----------------------------VSAMM GOVERNANCE
   GSMPageComponent,
   GSMSgComponent,
   GSMChartCardComponent,
   GSMDovaComponent,
   GSMDovaComponent,
   GSMRlgComponent,
   GSMFdtComponent,
   GSMTableComponent,
   GSMPopupComponent,
//===========================VSAMM GOVERNANCE POLICY========================
  GPCPageComponent,
   GPCChartCardComponent,
   GPCDovaComponent,
   GPCRlgComponent,
   GPCTableComponent,
   GPCPopupComponent,
//===========================VSAMM GOVERNANCE EDUCATION========================
GEGPageComponent,
GEGChartCardComponent,
GEGDovaComponent,
GEGRlgComponent,
GEGTableComponent,
GEGPopupComponent,
   // ----------------------------VSAMM DESIGN
   DETPageComponent,
   DETSgComponent,
   DETChartCardComponent,
   DETDovaComponent,
   DETDovaComponent,
   DETRlgComponent,
   DETTableComponent,
   DETPopupComponent,
   //===========================================
   DSEPageComponent,
DSEChartCardComponent,
DSEDovaComponent,
DSERlgComponent,
DSETableComponent,
DSEPopupComponent,
//=====================================================
DSAPageComponent,
DSAChartCardComponent,
DSADovaComponent,
DSARlgComponent,
DSATableComponent,
DSAPopupComponent,

// ----------------------------VSAMM IMPLEMENTATION_DEFECT
IMPPageComponent,
IMPSgComponent,
IMPChartCardComponent,
IMPDovaComponent,
IMPDovaComponent,
IMPRlgComponent,
IMPTableComponent,
IMPPopupComponent,
//===========================================IMPLEMENTATION_SECURE_BUILD
ISBPageComponent,
ISBChartCardComponent,
ISBDovaComponent,
ISBRlgComponent,
ISBTableComponent,
ISBPopupComponent,
//===========================================IMPLEMENTATION_SECURE_DEPLOY
ISDPageComponent,
ISDChartCardComponent,
ISDDovaComponent,
ISDRlgComponent,
ISDTableComponent,
ISDPopupComponent,
ISDDovaComponent,
// ----------------------------VSAMM operate_environment
OETPageComponent,
OETSgComponent,
OETChartCardComponent,
OETDovaComponent,
OETDovaComponent,
OETRlgComponent,
OETTableComponent,
OETPopupComponent,
//===========================================operate_incident
OICPageComponent,
OICChartCardComponent,
OICDovaComponent,
OICRlgComponent,
OICTableComponent,
OICPopupComponent,
//===========================================operate_operational
OOPEPageComponent,
OOPEChartCardComponent,
OOPEDovaComponent,
OOPERlgComponent,
OOPETableComponent,
OOPEPopupComponent,
// ----------------------------VSAMM verify_arch
VERIPageComponent,
VERISgComponent,
VERIChartCardComponent,
VERIDovaComponent,
VERIDovaComponent,
VERIRlgComponent,
VERITableComponent,
VERIPopupComponent,
//===========================================verify_req
VEREPageComponent,
VEREChartCardComponent,
VEREDovaComponent,
VERERlgComponent,
VERETableComponent,
VEREPopupComponent,
//===========================================verify_security
VERSPageComponent,
VERSChartCardComponent,
VERSDovaComponent,
VERSRlgComponent,
VERSTableComponent,
VERSPopupComponent,
//===============================
HomeNewComponent,
  ],

  imports: [
    MatCarouselModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 60,
      outerStrokeWidth: 4,
      innerStrokeWidth: 3,
      space: -2,
     // outerStrokeColor: "#78C000",
     // innerStrokeColor: "#c7e596",
      outerStrokeColor: "#22cef6",
      outerStrokeGradient: true,
      outerStrokeGradientStopColor: "#415aa2",
      innerStrokeColor: "#3d6872",
      titleColor:"#FFFFFF",
      subtitleColor:"#FFFFFF",
      animationDuration: 500,
      percent: 50,
      animation:true,
      showSubtitle:true,
      titleFontSize:"10",
      subtitleFontSize:"10",
      showUnits:false,
      unitsColor:"#FFFFFF",
      unitsFontSize:"15"
    }),
    
    FormsModule, ReactiveFormsModule,GridModule,
    PDFModule, ExcelModule ,MatStepperModule,InputsModule,
    UserIdleModule.forRoot({idle: 600, timeout: 300, ping: 120}),
    PerfectScrollbarModule,
    FontAwesomeModule,
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    AngularSvgIconModule,
    MatToolbarModule,
    SlimLoadingBarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    ChartsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    MaterialModule,
    CardsModule,
    MDBBootstrapModule,
    ScrollSpyModule,
    ModalModule,
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    ScrollSpyModule.forRoot(),
    MatCardModule,
    FlexLayoutModule,
    MDBBootstrapModule.forRoot(),
    CardsModule,
    MaterialModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatAutocompleteModule,
    TooltipModule,
    NgbModule,
    SlimLoadingBarModule,
    BrowserAnimationsModule,
  MatButtonToggleModule,

  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,

  MatInputModule,

  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,

  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,

  MatTooltipModule,
  ChartsModule,
  NgChartjsModule.registerPlugin(),
  ColorPickerModule,
  ButtonsModule,
  ],
  entryComponents: [
     DialogNavComponent,
    DialogDesComponentComponent,
	 


    GSMPopupComponent,
    GPCPopupComponent,
    GEGPopupComponent,
    DETPopupComponent,
    DSEPopupComponent,
    DSAPopupComponent,
    IMPPopupComponent,
    ISBPopupComponent,
    ISDPopupComponent,
    OETPopupComponent,
    OICPopupComponent,
    OOPEPopupComponent,
    VERIPopupComponent,
    VEREPopupComponent,
    VERSPopupComponent
  ],
 providers: [httpInterceptorProviders, AuthServices, AuthGuard ,
  {
    provide:  MatDialogRef,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

  }],
 bootstrap: [AppComponent]
})
export class AppModule {  }
