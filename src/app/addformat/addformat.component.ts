import { Component, OnInit } from '@angular/core';
import {RequestService} from '../requestService';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addformat',
  templateUrl: './addformat.component.html',
  styleUrls: ['./addformat.component.css'],
  providers: [RequestService]
})
export class AddformatComponent implements OnInit {
  name: string;
  description: string;

  constructor(private requestService: RequestService, private router: Router) { }

  ngOnInit() {
  }

  add(addForm: NgForm) {
    this.requestService.addFormat(
      addForm.value.formatName, addForm.value.formatDescription, sessionStorage.getItem('userid'), sessionStorage.getItem('userid')
    ).subscribe((data: any) => {
      if(data.info === 1) {
        this.router.navigate(['/dashboard/format']);
      }else{
        alert('something went wrong');
      }
    });

  }

}
