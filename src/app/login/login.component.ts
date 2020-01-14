import { Component, OnInit } from '@angular/core';
import { RequestService} from '../requestService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RequestService]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private requestService: RequestService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.requestService.login(this.email, this.password).subscribe((data: any) => {
      if(data.info === 1){
        localStorage.setItem('token', data.token);
        this.router.navigate(['/dashboard']);
      }else{
        alert('Wrong login data. Try again');
      }
    });
  }
}
