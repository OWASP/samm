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
  
  
  dovagraph()
  {
    return this.http.get(environment.apiBaseUrl + '/dovagraph_crypto')
   .pipe(map(res => res.json()));

  }
  
  //first graph
  scores()
  {
    return this.http.get(environment.apiBaseUrl + '/cryptoscores')
    .pipe(map(res => res.json()));
  }
 

 
  
  //edit
  
  
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  edit_history_score_implement(user)
  {
    return this.http.post(environment.apiBaseUrl + '/edit_history_score_implement',user)
    .pipe(map(res => res.json()));
  }
  fourthgraph(user)
  {
    return this.http.post(environment.apiBaseUrl + '/last_graph_gover',user)
    .pipe(map(res => res.json()));
  }
  
  governance_education_table()
  {
    return this.http.get(environment.apiBaseUrl + '/governance_education_table')
    .pipe(map(res => res.json()));
  }
  get_select_options(user)
  {
    return this.http.post(environment.apiBaseUrl + '/get_select_options_education',user)
    .pipe(map(res => res.json()));
  }
  getuploads(user){
    return this.http.post(environment.apiBaseUrl + '/getuploaded_governance_education',user)
    .pipe(map(res => res.json()));
  }
  firstgraph()
  {
    return this.http.get(environment.apiBaseUrl + '/gover_first_graph')
    .pipe(map(res => res.json()));
  }
  secondgraph()
  {
    return this.http.get(environment.apiBaseUrl + '/gover_first_graph')
    .pipe(map(res => res.json()));
  }
 
  download(user) 
  {
    return this._http.post(environment.apiBaseUrl + '/download_files',user,{responseType: 'blob',
    headers:new HttpHeaders().append('Content-Type','application/json')})

  }
  comment_history(user)
  {
    
    return this.http.put(environment.apiBaseUrl + '/comm_hist',user)
    .pipe(map(res => res.json()));
  }
  edit_table(user)
  {
    return this.http.put(environment.apiBaseUrl + '/governance_education_edit',user)
    .pipe(map(res => res.json()));
  }
  upload_files(user)
  {
    return this.http.post(environment.apiBaseUrl + '/upload_files_vsamm',user)
    .pipe(map(res => res.json()));
  }
  upload_path_db(user)
  {
    return this.http.post(environment.apiBaseUrl + '/upload_path_db_vsamm',user)
    .pipe(map(res => res.json()));
  }
  thirdgraph()
  {
    return this.http.get(environment.apiBaseUrl + '/gover_education_third_graph')
    .pipe(map(res => res.json()));
  }
}
