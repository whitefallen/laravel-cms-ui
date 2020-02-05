import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css'],
  providers: [RequestService]
})
export class AddtopicComponent extends BaseComponent implements OnInit {
  name: string;
  description: string;
  files: File;
  imageBase64: string | ArrayBuffer;
  imgIsSet = false;

  constructor(private requestService: RequestService, private router: Router) {
    super();
  }

  ngOnInit() {
  }

  add(addForm: NgForm) {
    const _self = this;
    if(this.imgIsSet){
      const reader = new FileReader();
      reader.readAsDataURL(this.files);
      reader.onload = function () {
        _self.imageBase64 = reader.result;
        _self.requestService.addTopic(
          addForm.value.topicName, addForm.value.topicDescription, _self.imageBase64, sessionStorage.getItem('userid'),
          sessionStorage.getItem('userid')
        ).subscribe((data: any) => {
          if(data.info === 1) {
            _self.router.navigate(['/dashboard/topic']);
          } else {
            alert('something went wrong');
          }
        });
      };
    }else{
      _self.requestService.addTopic(
        addForm.value.topicName, addForm.value.topicDescription, _self.imageBase64, sessionStorage.getItem('userid'),
        sessionStorage.getItem('userid')
      ).subscribe((data: any) => {
        if(data.info === 1) {
          _self.router.navigate(['/dashboard/topic']);
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
