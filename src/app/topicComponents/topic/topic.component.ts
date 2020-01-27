import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {AppSettings} from '../../../AppSettings';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers: [RequestService]
})
export class TopicComponent implements OnInit {
  public topics: any;
  public backendroute = AppSettings.API_HOST_LOCAL;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.allTopic().subscribe((data: any) => {
      this.topics = data.data;
    });
  }

}
