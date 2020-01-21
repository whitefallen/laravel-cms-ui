import { Component, OnInit } from '@angular/core';
import {RequestService} from '../requestService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-formatdetail',
  templateUrl: './formatdetail.component.html',
  styleUrls: ['./formatdetail.component.css'],
  providers: [RequestService]
})
export class FormatdetailComponent implements OnInit {
  public format: any;
  public creator: any;
  public format_id: string;

  constructor(private requestService: RequestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.format_id = this.route.snapshot.paramMap.get('id');
    this.requestService.formatDetail(this.format_id).subscribe((data: any) => {
      this.format = data.data;
      this.creator = data.data.creator;
    });
  }

}
