import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../requestService';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-addtag',
  templateUrl: './addtag.component.html',
  styleUrls: ['./addtag.component.css'],
  providers: [RequestService]
})
export class AddtagComponent extends BaseComponent implements OnInit {
  name: string;
  description: string;

  constructor(private requestService: RequestService, private router: Router) {
    super();
  }

  ngOnInit() {
  }

  add(addForm: NgForm) {
    this.requestService.addTag(
      addForm.value.tagName, addForm.value.tagDescription, sessionStorage.getItem('userid'), sessionStorage.getItem('userid')
    ).subscribe((data: any) => {
      if(data.info === 1) {
        this.router.navigate(['/dashboard/tag']);
      }else{
        alert('something went wrong');
      }
    });

  }

}
