import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../AppSettings';

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }),
  };

  public login(email: string, password: string){
    return this.http.post(AppSettings.API_HOST_LOCAL + 'api/login',{email: email, password: password}, this.httpOptions);
  }

  public allPost(){
    return this.http.get(AppSettings.API_HOST_LOCAL + 'api/posts', this.httpOptions);
  }

  public postDetail(id: string){
    return this.http.get(AppSettings.API_HOST_LOCAL + 'api/posts/' + id, this.httpOptions);
  }
}
