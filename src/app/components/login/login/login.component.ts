import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user_service/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isRemember: boolean;
  message_error: string;

  constructor(private router: Router, private userService: UserService) {
    this.username = '';
    this.password = '';
    this.message_error = '';
    this.isRemember = false;
  }

  ngOnInit(): void {}

  login() {
    this.userService
      .login(this.username, this.password, this.isRemember)
      .subscribe(
        (result) => {
          if (result === 'success') {
            this.router.navigate(['/home']);
          } else {
            this.message_error = 'Sai thông tin đăng nhập, hãy thử lại!';
          }
        },
        (error) => {
          this.message_error = 'Lỗi hệ thống';
        }
      );
  }
}
