import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AppSettings} from '../../../AppSettings';

@Component({
  selector: 'app-edittopic',
  templateUrl: './edittopic.component.html',
  styleUrls: ['./edittopic.component.css'],
  providers: [RequestService]
})
export class EdittopicComponent implements OnInit {
  files: File;
  imageBase64: string | ArrayBuffer;
  public topic: any;
  public creator: any;
  public topic_id: string;
  imgIsSet = false;
  public backendroute = AppSettings.API_HOST_LOCAL;

  constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.topic_id = this.route.snapshot.paramMap.get('id');
    this.requestService.topicDetail(this.topic_id).subscribe((data: any) => {
      this.topic = data.data;
      this.creator = data.data.creator;
    });
  }

  edit(editForm: NgForm) {
    const _self = this;
    if(this.imgIsSet){
      const reader = new FileReader();
      reader.readAsDataURL(this.files);
      reader.onload = function () {
        _self.imageBase64 = reader.result;
        _self.requestService.editTopic(
          _self.topic_id, editForm.value.topicName, editForm.value.topicDescription, _self.imageBase64, _self.imgIsSet,
          _self.topic.created_by, sessionStorage.getItem('userid')
        ).subscribe((data: any) => {
          if (data.info === 1) {
            _self.router.navigate(['/dashboard/topic/', _self.topic_id, 'detail']);
          } else {
            alert('something went wrong');
          }
        });
      };
    }else{
      _self.requestService.editTopic(
        _self.topic_id, editForm.value.topicName, editForm.value.topicDescription, this.topic.image, _self.imgIsSet,
        _self.topic.created_by, sessionStorage.getItem('userid')
      ).subscribe((data: any) => {
        if (data.info === 1) {
          _self.router.navigate(['/dashboard/topic/', _self.topic_id, 'detail']);
        } else {
          alert('something went wrong');
        }
      });
    }
  }

  onFileChanged(event: any) {
    this.files = event.target.files[0];
    this.imgIsSet = true;
  }

}
