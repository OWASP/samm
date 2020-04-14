import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private http: Http) {
  }

  resetpass(user) {
    // let headers= new Headers();
    // headers.append('Content-Type','application/json');
    return this.http.post(environment.apiBaseUrl + '/resetpassword', user)
      .pipe(map(res => res.json()));

  }

  verifyotp(user) {

    //  let headers= new Headers();
    //  headers.append('Content-Type','application/json');
    return this.http.post(environment.apiBaseUrl + '/totp-validate', user)
      .pipe(map(res => res.json()));
  }

  changepass(user) {
    return this.http.put(environment.apiBaseUrl + '/savepassword', user)
      .pipe(map(res => res.json()));
  }

  getvalue() {
    return this.http.get(environment.apiBaseUrl + '/values')
      .pipe(map(res => res.json()));
  }

  test() {
    return this.http.get(environment.apiBaseUrl + '/downvalues')
      .pipe(map(res => res.json()));
  }

  getfirstvalue() {
    return this.http.get(environment.apiBaseUrl + '/firstgraphvalues')
      .pipe(map(res => res.json()));
  }

  reportdata(select) {
    // console.log(select);
    return this.http.post(environment.apiBaseUrl + '/reportdata', select)
      .pipe(map(res => res.json()));
  }

  reportexcel() {
    return this.http.get(environment.apiBaseUrl + '/reportexcel');
  }
}

