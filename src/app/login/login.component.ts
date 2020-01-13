import { Component, OnInit } from '@angular/core';
import { RequestService} from '../requestService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
  }

  login() {
    this.requestService.login(this.email, this.password).subscribe(res => {
      console.log(res);
    });
  }
}
