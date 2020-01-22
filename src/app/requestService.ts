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
    return this.http.post(AppSettings.API_HOST_LOCAL + 'api/login',{ email: email, password: password}, this.httpOptions);
  }

  public allPost(){
    return this.http.get(AppSettings.API_HOST_LOCAL + 'api/posts', this.httpOptions);
  }

  public postDetail(id: string){
    return this.http.get(AppSettings.API_HOST_LOCAL + 'api/posts/' + id, this.httpOptions);
  }

  public allFormat(){
    return this.http.get(AppSettings.API_HOST_LOCAL + 'api/formats', this.httpOptions);
  }

  public formatDetail(id: string){
    return this.http.get(AppSettings.API_HOST_LOCAL + 'api/formats/' + id, this.httpOptions);
  }

  public editFormat(id: string, name: string, description: string, created_by: string, changed_by: string){
    return this.http.post(AppSettings.API_HOST_LOCAL + '/api/formats/' + id, {
      name: name, description: description, created_by: created_by, changed_by: changed_by
    }, this.httpOptions);
  }

  public addFormat(name: string, description: string, created_by: string, changed_by: string){
    return this.http.post(AppSettings.API_HOST_LOCAL + '/api/formats', {
      name: name, description: description, created_by: created_by, changed_by: changed_by
    }, this.httpOptions);
  }
}
