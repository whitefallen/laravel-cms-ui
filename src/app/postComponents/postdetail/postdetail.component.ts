import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css'],
  providers: [RequestService]
})
export class PostdetailComponent extends BaseComponent implements OnInit {
  public post: any;
  public creator: any;
  public editor: any;
  public post_id: string;
  public format: any;
  public topics: any;
  public tags: any;

  constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit() {
    this.post_id = this.route.snapshot.paramMap.get('id');
    this.requestService.postDetail(this.post_id).subscribe((data: any) => {
      this.post = data.data;
      this.creator = data.data.creator;
      this.editor = data.data.editor;
      this.format = data.data.format;
      this.topics = data.data.topics;
      this.tags = data.data.tags;
    });
  }

  delete(id: string, name: string) {
    if(confirm('Are you sure to delete the post: "' + name + '"?')) {
      this.requestService.deletePost(id).subscribe((data: any) => {
        if(data.info === 1) {
          this.router.navigate(['/dashboard/post']);
        }else{
          alert('something went wrong');
        }
      });
    }
  }

}
