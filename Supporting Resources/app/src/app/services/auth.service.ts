import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServicem {
  user: any;
  constructor(private http:Http, private _http: HttpClient) { }
  resetpass(user)
  {
    // console.log("okk");
    // let headers= new Headers();
    // headers.append('Content-Type','application/json');
    return this.http.post(environment.apiBaseUrl + '/resetpassword', user)
   .pipe(map(res => res.json()));

  }

  verifyotp(user)
  {

  //  let headers= new Headers();
  //  headers.append('Content-Type','application/json');
    return this.http.post(environment.apiBaseUrl + '/totp-validate', user)
    .pipe(map(res => res.json()));
  }
  changepass(user)
  {
    return this.http.put(environment.apiBaseUrl + '/savepassword', user)
    .pipe(map(res => res.json()));
  }
  scores()
  {
    return this.http.get(environment.apiBaseUrl + '/bracscores')
   .pipe(map(res => res.json()));

  }
  secondgraph()
  {
    return this.http.get(environment.apiBaseUrl + '/bracsecondvalue')
    .pipe(map(res => res.json()));
  }
  firstvalue()
  {
    return this.http.get(environment.apiBaseUrl + '/bracfirstvalue')
    .pipe(map(res => res.json()));
  }
  secondvalue()
  {
    return this.http.get(environment.apiBaseUrl + '/bracsecondvalue')
    .pipe(map(res => res.json()));
  }
  thridvalue() {
    return this.http.get(environment.apiBaseUrl + '/bracthirdvalue')
    .pipe(map(res => res.json()));
  }
  alltabledata() {
    return this.http.get(environment.apiBaseUrl + '/bracalltabledata')
    .pipe(map(res => res.json()));
  }
  vsammtable() {
    return this.http.get(environment.apiBaseUrl + '/bracvsammtable')
    .pipe(map(res => res.json()));
  }
  alltable() {
    return this.http.get(environment.apiBaseUrl + '/bracalltable')
    .pipe(map(res => res.json()));
  }
  update() {
    return this.http.get(environment.apiBaseUrl + '/bracupdate')
    .pipe(map(res => res.json()));
  }
  gethistreg(user)
  {
    return this.http.put(environment.apiBaseUrl + '/brachist_reg',user)
    .pipe(map(res => res.json()));
  }
  editgoveg(user)
  {
    return this.http.put(environment.apiBaseUrl + '/braceditgoveg',user)
    .pipe(map(res => res.json()));
  }
  uploadreg(user)
  {
    return this.http.post(environment.apiBaseUrl + '/upload',user)
    .pipe(map(res => res.json()));
  }
  reg_tab_la()
  {
    return this.http.get(environment.apiBaseUrl + '/bracreg_la_tab')
    .pipe(map(res => res.json()));
  }
  uploadreg_db(user)
  {
    return this.http.post(environment.apiBaseUrl + '/updatesss',user)
    .pipe(map(res => res.json()));
  }
  download(user) {
    return this._http.post(environment.apiBaseUrl + '/download',user,{responseType: 'blob',
    headers:new HttpHeaders().append('Content-Type','application/json')})

  }
  getuploads(user){
    return this.http.post(environment.apiBaseUrl + '/getupload',user)
    .pipe(map(res => res.json()));
  }
  down() {
    return this.http.get(environment.apiBaseUrl + '/down')
    .pipe(map(res => res.json()));
  }
  access()
  {
    return this.http.get(environment.apiBaseUrl + '/bracscores')
   .pipe(map(res => res.json()));

  }
  human()
  {
    return this.http.get(environment.apiBaseUrl + '/descores')
   .pipe(map(res => res.json()));

  }
  asset()
  {
    return this.http.get(environment.apiBaseUrl + '/rascores')
   .pipe(map(res => res.json()));

  }
  commu()
  {
    return this.http.get(environment.apiBaseUrl + '/itscores')
   .pipe(map(res => res.json()));

  }
  comp()
  {
    return this.http.get(environment.apiBaseUrl + '/isrscores')
   .pipe(map(res => res.json()));

  }
  crypto()
  {
    return this.http.get(environment.apiBaseUrl + '/conscores')
   .pipe(map(res => res.json()));

  }
  info()
  {
    return this.http.get(environment.apiBaseUrl + '/mdisscores')
   .pipe(map(res => res.json()));

  }
  infor()
  {
    return this.http.get(environment.apiBaseUrl + '/misscores')
   .pipe(map(res => res.json()));

  }
  sec()
  {
    return this.http.get(environment.apiBaseUrl + '/iscscores')
   .pipe(map(res => res.json()));

  }
  ope()
  {
    return this.http.get(environment.apiBaseUrl + '/lmscores')
   .pipe(map(res => res.json()));

  }
  org()
  {
    return this.http.get(environment.apiBaseUrl + '/ioscores')
   .pipe(map(res => res.json()));

  }
  phy()
  {
    return this.http.get(environment.apiBaseUrl + '/equscores')
   .pipe(map(res => res.json()));

  }
  sup()
  {
    return this.http.get(environment.apiBaseUrl + '/isrscores')
   .pipe(map(res => res.json()));

  }
  sys()
  {
    return this.http.get(environment.apiBaseUrl + '/srisscores')
   .pipe(map(res => res.json()));

  }
  gp1()
  {
    return this.http.get(environment.apiBaseUrl + '/access')
   .pipe(map(res => res.json()));

  }
  gp2()
  {
    return this.http.get(environment.apiBaseUrl + '/asset')
   .pipe(map(res => res.json()));

  }
  gp3()
  {
    return this.http.get(environment.apiBaseUrl + '/comm')
   .pipe(map(res => res.json()));

  }
  gp4()
  {
    return this.http.get(environment.apiBaseUrl + '/crypto')
   .pipe(map(res => res.json()));

  }
  gp5()
  {
    return this.http.get(environment.apiBaseUrl + '/human')
   .pipe(map(res => res.json()));

  }
  gp6()
  {
    return this.http.get(environment.apiBaseUrl + '/mis')
   .pipe(map(res => res.json()));

  }
  gp7()
  {
    return this.http.get(environment.apiBaseUrl + '/isecurity')
   .pipe(map(res => res.json()));

  }
  gp8()
  {
    return this.http.get(environment.apiBaseUrl + '/mdis')
   .pipe(map(res => res.json()));

  }
  gp9()
  {
    return this.http.get(environment.apiBaseUrl + '/ope')
   .pipe(map(res => res.json()));

  }
  gp10()
  {
    return this.http.get(environment.apiBaseUrl + '/org')
   .pipe(map(res => res.json()));

  }
  gp11()
  {
    return this.http.get(environment.apiBaseUrl + '/phy')
   .pipe(map(res => res.json()));

  }
  gp12()
  {
    return this.http.get(environment.apiBaseUrl + '/sup')
   .pipe(map(res => res.json()));
  }
  gp13()
  {
    return this.http.get(environment.apiBaseUrl + '/sys')
   .pipe(map(res => res.json()));
  }
  gp14()
  {
    return this.http.get(environment.apiBaseUrl + '/comp')
   .pipe(map(res => res.json()));

  }
  hours()
  {
    return this.http.get(environment.apiBaseUrl + ' /hours')
    .pipe(map(res => res.json()));
  }

}

