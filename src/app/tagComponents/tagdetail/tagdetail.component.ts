import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-tagdetail',
  templateUrl: './tagdetail.component.html',
  styleUrls: ['./tagdetail.component.css'],
  providers: [RequestService]
})
export class TagdetailComponent extends BaseComponent implements OnInit {
  public tag: any;
  public creator: any;
  public editor: any;
  public tag_id: string;

  constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit() {
    this.tag_id = this.route.snapshot.paramMap.get('id');
    this.requestService.tagDetail(this.tag_id).subscribe((data: any) => {
      this.tag = data.data;
      this.creator = data.data.creator;
      this.editor = data.data.editor;
    });
  }

  delete(id: string, name: string) {
    if(confirm('Are you sure to delete the tag: "' + name + '"?')) {
      this.requestService.deleteTag(id).subscribe((data: any) => {
        if(data.info === 1) {
          this.router.navigate(['/dashboard/tag']);
        }else{
          alert('something went wrong');
        }
      });
    }
  }

}
