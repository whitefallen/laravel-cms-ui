import { Component, OnInit } from '@angular/core';
import { RequestService} from '../../requestService';
import {Router} from '@angular/router';
import {BaseComponent} from '../../baseComponents/base/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [RequestService]
})
export class LoginComponent extends BaseComponent implements OnInit {
  email: string;
  password: string;

  constructor(private requestService: RequestService, private router: Router) {
    super();
  }

  ngOnInit() {
  }

  login() {
    this.requestService.login(this.email, this.password).subscribe((data: any) => {
      if(data.info === 1){
        localStorage.setItem('token', data.token);
        sessionStorage.setItem('userid', data.currentUser.id);
        this.router.navigate(['/dashboard']);
      }else{
        alert('Wrong login data. Try again');
      }
    });
  }
}
