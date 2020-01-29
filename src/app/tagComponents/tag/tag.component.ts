import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
  providers: [RequestService]
})
export class TagComponent implements OnInit {
  public tags: any;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.allTag().subscribe((data: any) => {
      this.tags = data.data;
    });
  }

}
