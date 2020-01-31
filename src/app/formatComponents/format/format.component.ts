import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.css'],
  providers: [RequestService]
})
export class FormatComponent extends BaseComponent implements OnInit {
  public formats: any;

  constructor(private requestService: RequestService) {
    super();
  }

  ngOnInit() {
    this.requestService.allFormat().subscribe((data: any) => {
      this.formats = data.data;
    });
  }

}
