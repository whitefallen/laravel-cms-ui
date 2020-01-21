import { Component, OnInit } from '@angular/core';
import {RequestService} from '../requestService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editformat',
  templateUrl: './editformat.component.html',
  styleUrls: ['./editformat.component.css'],
  providers: [RequestService]
})
export class EditformatComponent implements OnInit {
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
