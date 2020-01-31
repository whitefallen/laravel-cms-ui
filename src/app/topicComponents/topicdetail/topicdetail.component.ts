import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-topicdetail',
  templateUrl: './topicdetail.component.html',
  styleUrls: ['./topicdetail.component.css'],
  providers: [RequestService]
})
export class TopicdetailComponent extends BaseComponent implements OnInit {
  public topic: any;
  public creator: any;
  public editor: any;
  public topic_id: string;

  constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit() {
    this.topic_id = this.route.snapshot.paramMap.get('id');
    this.requestService.topicDetail(this.topic_id).subscribe((data: any) => {
      this.topic = data.data;
      this.creator = data.data.creator;
      this.editor = data.data.editor;
    });
  }

  delete(id: string, name: string) {
    if(confirm('Are you sure to delete the topic: "' + name + '"?')) {
      this.requestService.deleteTopic(id).subscribe((data: any) => {
        if(data.info === 1) {
          this.router.navigate(['/dashboard/topic']);
        }else{
          alert('something went wrong');
        }
      });
    }
  }

}
