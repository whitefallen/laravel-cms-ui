import { Component, OnInit } from '@angular/core';
import {RequestService} from '../requestService';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [RequestService]
})
export class PostComponent implements OnInit {
  public posts: [];

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.allPost().subscribe((data: any) => {
      console.log(data);
      this.posts = data.Posts;
      console.log(this.posts);
    });
  }

}
