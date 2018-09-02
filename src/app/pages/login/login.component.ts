import { AuthService } from './../../providers/auth.service';
import { Constants } from './../../app.constants';
import { RestApiService } from './../../providers/rest-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credential: any = {
    username: '',
    password: ''
  };

  constructor(
    private restApiService: RestApiService,
    private auth: AuthService,
    private router: Router
  ) { 
    if (this.auth.authenticated()) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
  }

  formValid() {
    let isValid: boolean = this.credential && this.credential.username && this.credential.password ? true : false;

    return isValid;
  }

  async onLogin() {
    try {
      let loginResponse = await this.restApiService.post(Constants.URL() + '/api/auth/signin', this.credential);
      if (loginResponse['status'] === 200) {
        window.localStorage.setItem('token-admin@schoolhub', loginResponse['token']);
        this.router.navigate(['/home']);
      }else{
        //this.dataService.error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      }
    } catch (error) {
      //this.dataService.error('ไม่สามารถเชื่อมต่อข้อมูลได้');
    }
  }

}
