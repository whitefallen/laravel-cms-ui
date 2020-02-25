import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-webhookdetail',
  templateUrl: './webhookdetail.component.html',
  styleUrls: ['./webhookdetail.component.css'],
  providers: [RequestService]
})
export class WebhookdetailComponent extends BaseComponent implements OnInit {
  public webhook_id: string;
  public webhook: any;

  constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit() {
    this.webhook_id = this.route.snapshot.paramMap.get('id');
    this.requestService.webhookDetail(this.webhook_id).subscribe((data: any) => {
      this.webhook = data.data;
    });
  }

  delete(id: string, name: string) {
    if (confirm('Are you sure to delete the webhook: "' + name + '"?')) {
      this.requestService.deleteWebhook(id).subscribe((data: any) => {
        if (data.info === 1) {
          this.router.navigate(['/dashboard/webhook']);
        } else {
          alert('something went wrong');
        }
      });
    }
  }
}
