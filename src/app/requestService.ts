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

  public deleteFormat(id: string){
    return this.http.delete(AppSettings.API_HOST_LOCAL + '/api/formats/' + id, this.httpOptions);
  }

  public allTopic(){
    return this.http.get(AppSettings.API_HOST_LOCAL + '/api/topics', this.httpOptions);
  }

  public topicDetail(id: string){
    return this.http.get(AppSettings.API_HOST_LOCAL + 'api/topics/' + id, this.httpOptions);
  }

  public editTopic(id: string, name: string, description: string, image: any, imgIsSet: boolean, created_by: string, changed_by: string){
    return this.http.post(AppSettings.API_HOST_LOCAL + '/api/topics/' + id, {
      name: name, description: description, image: image, imgIsSet: imgIsSet, created_by: created_by, changed_by: changed_by
    }, this.httpOptions);
  }

  public addTopic(name: string, description: string, image: any, created_by: string, changed_by: string){
    return this.http.post(AppSettings.API_HOST_LOCAL + '/api/topics', {
      name: name, description: description, image: image, created_by: created_by, changed_by: changed_by
    }, this.httpOptions);
  }

  public deleteTopic(id: string){
    return this.http.delete(AppSettings.API_HOST_LOCAL + '/api/topics/' + id, this.httpOptions);
  }

  public allTag(){
    return this.http.get(AppSettings.API_HOST_LOCAL + 'api/tags', this.httpOptions);
  }

  public tagDetail(id: string){
    return this.http.get(AppSettings.API_HOST_LOCAL + 'api/tags/' + id, this.httpOptions);
  }

  public editTag(id: string, name: string, description: string, created_by: string, changed_by: string){
    return this.http.post(AppSettings.API_HOST_LOCAL + '/api/tags/' + id, {
      name: name, description: description, created_by: created_by, changed_by: changed_by
    }, this.httpOptions);
  }

  public addTag(name: string, description: string, created_by: string, changed_by: string){
    return this.http.post(AppSettings.API_HOST_LOCAL + '/api/tags', {
      name: name, description: description, created_by: created_by, changed_by: changed_by
    }, this.httpOptions);
  }

  public deleteTag(id: string){
    return this.http.delete(AppSettings.API_HOST_LOCAL + '/api/tags/' + id, this.httpOptions);
  }
}
