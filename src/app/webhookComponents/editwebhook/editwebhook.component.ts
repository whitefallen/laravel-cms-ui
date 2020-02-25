import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RequestService} from '../../requestService';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-editwebhook',
  templateUrl: './editwebhook.component.html',
  styleUrls: ['./editwebhook.component.css'],
  providers: [RequestService]
})
export class EditwebhookComponent extends BaseComponent implements OnInit {
  public webhook: any;
  public webhook_id: string;
  public eventOptions: any[];
  public selectedOption: any;

  constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit() {
    const dataSelectedOptions = [];
    this.webhook_id = this.route.snapshot.paramMap.get('id');
    this.requestService.webhookDetail(this.webhook_id).subscribe((data: any) => {
      this.webhook = data.data;

    });
    this.requestService.allEventOptions().subscribe((data: any) => {
      this.eventOptions = Object.keys(data.data).map(function(key) {
        return data.data[key];
      });
      this.selectedOption = Object.keys(data.data).map(function(objectKey) {
        if (this.webhook.event.includes(data.data[objectKey]) ) {
          return data.data[objectKey];
        }
      }.bind(this));
    });
  }

  edit(editForm: NgForm) {
    this.requestService.editWebhook(
      // tslint:disable-next-line:max-line-length
      this.webhook_id, editForm.value.webhookUrl, editForm.value.eventOptions, sessionStorage.getItem('userid'), sessionStorage.getItem('userid')
    ).subscribe((data: any) => {
      if (data.info === 1) {
        this.router.navigate(['/dashboard/webhook', this.webhook_id, 'detail']);
      } else {
        console.log(data.info);
        alert('something went wrong');
      }
    });
  }

}
