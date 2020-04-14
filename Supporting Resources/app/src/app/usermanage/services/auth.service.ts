import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  constructor(private http:Http, private _http: HttpClient) { }
usermanage()
  {
    return this.http.get(environment.apiBaseUrl + '/usermanage')
    .pipe(map(res => res.json()));
  }
  userdata(user)
  {
    return this.http.put(environment.apiBaseUrl + '/userdata',user)
    .pipe(map(res => res.json()));
  }
  deleteuser(user)
  {
    return this.http.put(environment.apiBaseUrl + '/deleteuser',user)
    .pipe(map(res => res.json()));
  }
  updateuser(user)
  {
    return this.http.put(environment.apiBaseUrl + '/update_user',user)
    .pipe(map(res => res.json()));
  }
  updateprofile(user)
  {
    return this.http.put(environment.apiBaseUrl + '/updateme', user)
    .pipe(map(res => res.json()));
  }
  getdetails()
  {
    return this.http.get(environment.apiBaseUrl + '/usermanage')
    .pipe(map(res => res.json()));
  }
    //update_reg
    updatereg(user)
    {
      return this.http.put(environment.apiBaseUrl + '/edit_reg',user)
      .pipe(map(res => res.json()));
    }
    deleteselect(user)
    {
      return this.http.put(environment.apiBaseUrl + '/del_select',user)
      .pipe(map(res => res.json()));
    }
    deletecol(user)
    {
      return this.http.put(environment.apiBaseUrl + '/del_col',user)
      .pipe(map(res => res.json()));
    }
    createuser(user)
    {
      return this.http.put(environment.apiBaseUrl + '/create_user',user)
      .pipe(map(res => res.json()));
    }
    addpname(user)
    {
      return this.http.put(environment.apiBaseUrl + '/add_project',user)
      .pipe(map(res => res.json()));
    }
    getUserdetails(user)
    {
      return this.http.put(environment.apiBaseUrl + '/userdata',user)
      .pipe(map(res => res.json()));
    }
    uploadreg(user)
  {
    return this.http.post(environment.apiBaseUrl + '/upload',user)
    .pipe(map(res => res.json()));
  }
  reg_tab_la()
  {
    return this.http.get(environment.apiBaseUrl + '/sdspreg_la_tab')
    .pipe(map(res => res.json()));
  }
  uploadreg_db(user)
  {
    return this.http.post(environment.apiBaseUrl + '/updatesss',user)
    .pipe(map(res => res.json()));
  }
  addUser(user)
  {
    return this.http.post(environment.apiBaseUrl + '/adduser',user)
    .pipe(map(res => res.json()));
  }
  oldpassword(user)
  {
    return this.http.post(environment.apiBaseUrl + '/confirmpass',user)
    .pipe(map(res => res.json()));
  }
  updatepassword(user)
  {
    return this.http.post(environment.apiBaseUrl + '/updatepass',user)
    .pipe(map(res => res.json()));
  }
}
