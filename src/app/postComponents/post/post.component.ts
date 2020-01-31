import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [RequestService]
})
export class PostComponent extends BaseComponent implements OnInit {
  public posts: any;

  constructor(private requestService: RequestService) {
    super();
  }

  ngOnInit() {
    this.requestService.allPost().subscribe((data: any) => {
      this.posts = data.data;
    });
  }

}
