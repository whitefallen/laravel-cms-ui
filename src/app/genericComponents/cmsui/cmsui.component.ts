import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-cmsui',
  templateUrl: './cmsui.component.html',
  styleUrls: ['./cmsui.component.css']
})
export class CmsuiComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
