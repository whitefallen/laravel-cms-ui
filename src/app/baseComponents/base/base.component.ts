import {Component} from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: '',
  template: ``
})


export class BaseComponent  {
  public backendroute = environment.apiUrl;
  constructor() {}
}
