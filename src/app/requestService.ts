import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';

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
    return this.http.post(environment.apiUrl + 'api/login',{ email: email, password: password}, this.httpOptions);
  }

  public allPost(){
    return this.http.get(environment.apiUrl + 'api/posts', this.httpOptions);
  }

  public postDetail(id: string){
    return this.http.get(environment.apiUrl + 'api/posts/' + id, this.httpOptions);
  }

  public editPost(id: string, title: string, published: boolean, publish_date: any, introduction: string, content: string, image: any,
                  tags: [], topic: [], format_id: string, created_by: string, changed_by: string){
    return this.http.post(environment.apiUrl + '/api/posts/' + id, {
      title: title, published: published, introduction: introduction, content: content, image: image, tags: tags, topic: topic,
      format_id: format_id, created_by: created_by, changed_by: changed_by
    }, this.httpOptions);
  }

  public addPost(title: string, published: boolean, publish_date: any, introduction: string, content: string, image: any,
                  tags: [], topic: [], format_id: string, created_by: string, changed_by: string){
    return this.http.post(environment.apiUrl + '/api/posts', {
      title: title, published: published, introduction: introduction, content: content, image: image, tags: tags, topic: topic,
      format_id: format_id, created_by: created_by, changed_by: changed_by
    }, this.httpOptions);
  }

  public deletePost(id: string){
    return this.http.delete(environment.apiUrl + '/api/posts/' + id, this.httpOptions);
  }

  public allFormat(){
    return this.http.get(environment.apiUrl + 'api/formats', this.httpOptions);
  }

  public formatDetail(id: string){
    return this.http.get(environment.apiUrl + 'api/formats/' + id, this.httpOptions);
  }

  public editFormat(id: string, name: string, description: string, created_by: string, changed_by: string){
    return this.http.post(environment.apiUrl + '/api/formats/' + id, {
      name: name, description: description, created_by: created_by, changed_by: changed_by
    }, this.httpOptions);
  }

  public addFormat(name: string, description: string, created_by: string, changed_by: string){
    return this.http.post(environment.apiUrl + '/api/formats', {
      name: name, description: description, created_by: created_by, changed_by: changed_by
    }, this.httpOptions);
  }

  public deleteFormat(id: string){
    return this.http.delete(environment.apiUrl + '/api/formats/' + id, this.httpOptions);
  }

  public allTopic(){
    return this.http.get(environment.apiUrl + '/api/topics', this.httpOptions);
  }

  public topicDetail(id: string){
    return this.http.get(environment.apiUrl + 'api/topics/' + id, this.httpOptions);
  }

  public editTopic(id: string, name: string, description: string, image: any, imgIsSet: boolean, created_by: string, changed_by: string){
    return this.http.post(environment.apiUrl + '/api/topics/' + id, {
      name: name, description: description, image: image, imgIsSet: imgIsSet, created_by: created_by, changed_by: changed_by
    }, this.httpOptions);
  }

  public addTopic(name: string, description: string, image: any, created_by: string, changed_by: string){
    return this.http.post(environment.apiUrl + '/api/topics', {
      name: name, description: description, image: image, created_by: created_by, changed_by: changed_by
    }, this.httpOptions);
  }

  public deleteTopic(id: string){
    return this.http.delete(environment.apiUrl + '/api/topics/' + id, this.httpOptions);
  }

  public allTag(){
    return this.http.get(environment.apiUrl + 'api/tags', this.httpOptions);
  }

  public tagDetail(id: string){
    return this.http.get(environment.apiUrl + 'api/tags/' + id, this.httpOptions);
  }

  public editTag(id: string, name: string, description: string, created_by: string, changed_by: string){
    return this.http.post(environment.apiUrl + '/api/tags/' + id, {
      name: name, description: description, created_by: created_by, changed_by: changed_by
    }, this.httpOptions);
  }

  public addTag(name: string, description: string, created_by: string, changed_by: string){
    return this.http.post(environment.apiUrl + '/api/tags', {
      name: name, description: description, created_by: created_by, changed_by: changed_by
    }, this.httpOptions);
  }

  public deleteTag(id: string){
    return this.http.delete(environment.apiUrl + '/api/tags/' + id, this.httpOptions);
  }
}
