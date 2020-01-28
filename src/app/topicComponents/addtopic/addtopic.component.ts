import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css'],
  providers: [RequestService]
})
export class AddtopicComponent implements OnInit {
  name: string;
  description: string;
  files: File;

  constructor(private requestService: RequestService, private router: Router) {}

  ngOnInit() {
  }

  add(addForm: NgForm) {
    this.requestService.addTopic(
      addForm.value.topicName, addForm.value.topicDescription, this.files, sessionStorage.getItem('userid'),
      sessionStorage.getItem('userid')
    ).subscribe((data: any) => {
      console.log(data.debug);
      if(data.info === 1) {
        this.router.navigate(['/dashboard/topic']);
      }else{
        alert('something went wrong');
      }
    });

  }

  onFileChanged(event: any) {
    this.files = event.target.files[0];
  }
}
