import { Component, OnInit } from '@angular/core';
import {RequestService} from '../requestService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css'],
  providers: [RequestService]
})
export class PostdetailComponent implements OnInit {
  public post: any;
  public creator: any;
  public post_id: string;
  public dataRecieved = false;

  constructor(private requestService: RequestService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.post_id = this.route.snapshot.paramMap.get('id');
    this.requestService.postDetail(this.post_id).subscribe((data: any) => {
      this.post = data.Post;
      this.creator = data.Creator;
      this.dataRecieved = true;
    });
  }

}
