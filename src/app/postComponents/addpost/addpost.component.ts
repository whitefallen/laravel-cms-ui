import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../baseComponents/base/base.component';
import {FormControl, NgForm} from '@angular/forms';
import {RequestService} from '../../requestService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
  providers: [RequestService]
})
export class AddpostComponent extends BaseComponent implements OnInit {
  title: string;
  topic: any;
  tags: any;
  formats: any;
  format_id: string;
  published = false;
  publish_date: number = null;
  introduction: string;
  content: string;
  files: File;
  imageBase64: string | ArrayBuffer;
  imgIsSet = false;

  selectedFormat: any;
  selectedTopic: any;
  selectedTag: any;

  constructor(private requestService: RequestService, private router: Router) {
    super();
  }

  ngOnInit() {
    this.requestService.allTag().subscribe((data: any) => {
      this.tags = data.data;
    });

    this.requestService.allTopic().subscribe((data: any) => {
      this.topic = data.data;
    });

    this.requestService.allFormat().subscribe((data: any) => {
      this.formats = data.data;
    });
  }

  add(addForm: NgForm) {
    const _self = this;
    if(this.imgIsSet){
      const reader = new FileReader();
      reader.readAsDataURL(this.files);
      reader.onload = function () {
        _self.imageBase64 = reader.result;
        _self.requestService.addPost(
          addForm.value.title, _self.published, _self.publish_date, addForm.value.introduction,
          addForm.value.content, _self.imageBase64, addForm.value.tags, addForm.value.topic, addForm.value.format,
          sessionStorage.getItem('userid'), sessionStorage.getItem('userid')
        ).subscribe((data: any) => {
          if(data.info === 1) {
            _self.router.navigate(['/dashboard/post']);
          } else {
            alert('something went wrong');
          }
        });
      };
    }else{
      _self.requestService.addPost(
        addForm.value.title, _self.published, _self.publish_date, addForm.value.introduction,
        addForm.value.content, _self.imageBase64, addForm.value.tags, addForm.value.topic, addForm.value.format,
        sessionStorage.getItem('userid'), sessionStorage.getItem('userid')
      ).subscribe((data: any) => {
        if(data.info === 1) {
          _self.router.navigate(['/dashboard/post']);
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

  onCheckboxChange(){
    if (this.published === false){
      this.published = true;
      this.publish_date = new Date().getTime();
    }else{
      this.published = false;
      this.publish_date = null;
    }
  }

}
