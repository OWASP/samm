import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hostname } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://'+ hostname +':8080/api/test/user';
  private pmUrl = 'http://'+ hostname +':8080/api/test/pm';
  private adminUrl = 'http://'+ hostname +':8080/api/test/admin';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  getPMBoard(): Observable<any> {
    return this.http.get(this.pmUrl);
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.adminUrl);
  }
  
}
