import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css'],
  providers: [RequestService]
})
export class PostdetailComponent implements OnInit {
  public post: any;
  public creator: any;
  public editor: any;
  public post_id: string;

  constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.post_id = this.route.snapshot.paramMap.get('id');
    this.requestService.postDetail(this.post_id).subscribe((data: any) => {
      this.post = data.data;
      this.creator = data.data.creator;
      this.editor = data.data.editor;
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
