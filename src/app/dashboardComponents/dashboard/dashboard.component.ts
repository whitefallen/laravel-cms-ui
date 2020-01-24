import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [RequestService]
})
export class DashboardComponent implements OnInit {
  public posts: [];

  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

}
