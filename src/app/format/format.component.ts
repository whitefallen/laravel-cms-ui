import { Component, OnInit } from '@angular/core';
import {RequestService} from '../requestService';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.css'],
  providers: [RequestService]
})
export class FormatComponent implements OnInit {
  public formats: any;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.allFormat().subscribe((data: any) => {
      this.formats = data.Formats;
    });
  }

}
