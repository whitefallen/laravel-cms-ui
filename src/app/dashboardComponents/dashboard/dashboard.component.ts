import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [RequestService]
})
export class DashboardComponent extends BaseComponent implements OnInit {
  public posts: [];

  constructor(private requestService: RequestService) {
    super();
  }

  ngOnInit() {
  }

}
