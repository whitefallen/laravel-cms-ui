import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RequestService} from '../../requestService';
import {Router} from '@angular/router';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-addwebhook',
  templateUrl: './addwebhook.component.html',
  styleUrls: ['./addwebhook.component.css'],
  providers: [RequestService]
})
export class AddwebhookComponent extends BaseComponent implements OnInit {
  url: string;
  eventOptions: any;
  selectedOption: any;

  constructor(private requestService: RequestService, private router: Router) {
    super();
  }

  ngOnInit() {
    this.requestService.allEventOptions().subscribe((data: any) => {
      this.eventOptions = data.data;
    });
  }

  add(addForm: NgForm) {
    console.log(addForm);
    this.requestService.addWebhook(
      addForm.value.webhookUrl, addForm.value.eventOptions, sessionStorage.getItem('userid'), sessionStorage.getItem('userid')
    ).subscribe((data: any) => {
      if (data.info === 1) {
        this.router.navigate(['/dashboard']);
      } else {
        console.log(data.info);
        alert('something went wrong');
      }
    });
  }
}
