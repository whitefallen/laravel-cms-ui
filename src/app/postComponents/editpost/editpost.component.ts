import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../baseComponents/base/base.component';
import {RequestService} from '../../requestService';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css'],
  providers: [RequestService]
})

export class EditpostComponent extends BaseComponent implements OnInit {
  post_id: string;
  post: any;
  creator: any;

  published = false;
  publish_date: number;

  files: File;
  imageBase64: string | ArrayBuffer;
  imgIsSet = false;

  topic: any;
  tags: any;
  formats: any;
  format_id: string;

  selectedFormat: any;
  selectedTopic: any;
  selectedTag: any;

  constructor(private requestService: RequestService, private route: ActivatedRoute,  private router: Router) {
    super();
  }

  ngOnInit() {
    this.post_id = this.route.snapshot.paramMap.get('id');

    this.requestService.postDetail(this.post_id).subscribe((data: any) => {
      this.post = data.data;
      this.creator = data.data.creator;
    });

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
    console.log( new Date('0000-00-00'));
    if (this.imgIsSet) {
      const reader = new FileReader();
      reader.readAsDataURL(this.files);
      reader.onload = function () {
        _self.imageBase64 = reader.result;
        _self.requestService.editPost(
          _self.post_id, addForm.value.title, _self.published, _self.publish_date, addForm.value.introduction,
          addForm.value.content, _self.imageBase64, _self.imgIsSet, addForm.value.tags, addForm.value.topic, addForm.value.format,
          _self.creator.id, sessionStorage.getItem('userid')
        ).subscribe((data: any) => {
          if (data.info === 1) {
            _self.router.navigate(['/dashboard/post']);
          } else {
            alert('something went wrong');
          }
        });
      };
    } else {
      _self.requestService.editPost(
        _self.post_id, addForm.value.title, _self.published, _self.publish_date, addForm.value.introduction,
        addForm.value.content, _self.imageBase64, _self.imgIsSet, addForm.value.tags, addForm.value.topic, addForm.value.format,
        _self.creator.id, sessionStorage.getItem('userid')
      ).subscribe((data: any) => {
        if (data.info === 1) {
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

  onCheckboxChange() {
    if (this.published === false) {
      this.published = true;
      this.publish_date = Math.floor(Date.now() / 1000);
    } else {
      this.published = false;
      this.publish_date = null;
    }
  }

}
