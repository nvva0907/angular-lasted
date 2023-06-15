import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/responses/ApiResponse';
import { PaginationResponse } from 'src/app/responses/PaginationResponse';
import { UserModel } from 'src/app/models/UserModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userURL: string = environment.baseURL + 'user/';
  authURL: string = environment.baseURL + 'authen/login';

  constructor(private http: HttpClient) {
    // contructor
  }

  getAllUsers(
    page: number,
    size: number,
    username: string,
    fullName: string,
    email: string,
    phoneNumber: string
  ): Observable<ApiResponse<PaginationResponse<UserModel>>> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('size', size.toString());
    params = params.append('username', username);
    params = params.append('fullName', fullName);
    params = params.append('email', email);
    params = params.append('phoneNumber', phoneNumber);

    return this.http.get<ApiResponse<PaginationResponse<UserModel>>>(
      this.userURL + 'all',
      { params }
    );
  }

  getDetailUsers(): Observable<Object> {
    return this.http.get<Object>(this.userURL);
  }

  createUsers(): Observable<Object> {
    return this.http.get<Object>(this.userURL);
  }

  updateUsers(): Observable<Object> {
    return this.http.get<Object>(this.userURL);
  }

  resetPassword(): Observable<Object> {
    return this.http.get<Object>(this.userURL);
  }

  changePassword(): Observable<Object> {
    return this.http.get<Object>(this.userURL);
  }

  getDetailUsersByAdmin(): Observable<Object> {
    return this.http.get<Object>(this.userURL);
  }

  deletedUser(): Observable<Object> {
    return this.http.get<Object>(this.userURL);
  }

  login(
    username: string,
    password: string,
    isRememberme: boolean
  ): Observable<string> {
    const body = {
      username: username,
      password: password,
    };
    return new Observable<string>((observer) => {
      this.http.post(this.authURL, body).subscribe(
        (data: any) => {
          const loginInformation = {
            token: data.token,
            roles: data.roles,
          };
          saveInformationIntoStorage(isRememberme, loginInformation);
          observer.next('success');
          observer.complete();
        },
        (error) => {
          observer.error('failed');
        }
      );
    });
  }
}

function saveInformationIntoStorage(isRemember: boolean, information: any) {
  if (isRemember) {
    localStorage.setItem('token', information.token);
    localStorage.setItem('roles', information.roles);
  } else {
    localStorage.clear();
    sessionStorage.setItem('token', information.token);
    sessionStorage.setItem('roles', information.roles);
  }
}
