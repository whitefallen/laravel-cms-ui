import { Component, OnInit } from '@angular/core';
import {RequestService} from '../requestService';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [RequestService]
})
export class PostComponent implements OnInit {
  public posts: any;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.allPost().subscribe((data: any) => {
      this.posts = data.data;
      console.log(this.posts);
    });
  }

}
