import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
  providers: [RequestService]
})
export class TagComponent extends BaseComponent implements OnInit {
  public tags: any;

  constructor(private requestService: RequestService) {
    super();
  }

  ngOnInit() {
    this.requestService.allTag().subscribe((data: any) => {
      this.tags = data.data;
    });
  }

}
