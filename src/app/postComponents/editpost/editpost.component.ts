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

  topics: any;
  tags: any;
  formats: any;
  format_id: string;

  selectedFormat: any;
  selectedTopics: any;
  selectedTags: any;

  constructor(private requestService: RequestService, private route: ActivatedRoute,  private router: Router) {
    super();
  }

  ngOnInit() {
    this.post_id = this.route.snapshot.paramMap.get('id');

    const dataSelectedTags = [];
    const dataSelectedTopics = [];

    this.requestService.postDetail(this.post_id).subscribe((data: any) => {

      this.post = data.data;
      this.creator = data.data.creator;

      Object.keys(data.data.topics).map(function(objectKey, index) {
        dataSelectedTopics[index] = data.data.topics[objectKey].id;
        this['selectedTopics'] = dataSelectedTopics;
      }.bind(this));

      Object.keys(data.data.tags).map(function(objectKey, index) {
        dataSelectedTags[index] = data.data.tags[objectKey].id;
        this['selectedTags'] = dataSelectedTags;
      }.bind(this));

      this.selectedFormat = data.data.format.id;

    });



    this.requestService.allTag().subscribe((data: any) => {
      this.tags = data.data;
    });

    this.requestService.allTopic().subscribe((data: any) => {
      this.topics = data.data;
    });

    this.requestService.allFormat().subscribe((data: any) => {
      this.formats = data.data;
    });
  }

  edit(editForm: NgForm) {
    const _self = this;
    if (this.imgIsSet) {
      const reader = new FileReader();
      reader.readAsDataURL(this.files);
      reader.onload = function () {
        _self.imageBase64 = reader.result;
        _self.requestService.editPost(
          _self.post_id, editForm.value.title, _self.published, _self.publish_date, editForm.value.introduction,
          editForm.value.content, _self.imageBase64, _self.imgIsSet, editForm.value.tags, editForm.value.topics, editForm.value.format,
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
        _self.post_id, editForm.value.title, _self.published, _self.publish_date, editForm.value.introduction,
        editForm.value.content, _self.imageBase64, _self.imgIsSet, editForm.value.tags, editForm.value.topics, editForm.value.format,
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
