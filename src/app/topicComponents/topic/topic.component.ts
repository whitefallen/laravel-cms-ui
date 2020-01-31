import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers: [RequestService]
})
export class TopicComponent extends BaseComponent implements OnInit {
  public topics: any;

  constructor(private requestService: RequestService) {
    super();
  }

  ngOnInit() {
    this.requestService.allTopic().subscribe((data: any) => {
      this.topics = data.data;
    });
  }

}
