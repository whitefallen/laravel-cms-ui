import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-webhook',
  templateUrl: './webhook.component.html',
  styleUrls: ['./webhook.component.css'],
  providers: [RequestService]
})
export class WebhookComponent extends BaseComponent implements OnInit {
  private webhooks: any;

  constructor(private requestService: RequestService) {
    super();
  }

  ngOnInit() {
    this.requestService.allWebhooks().subscribe((data: any) => {
      this.webhooks = data.data;
    });
  }

}
