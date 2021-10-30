import { Component, OnInit } from '@angular/core';
import { AwsCognitoService } from '../service/aws-cognito.service';
import { UserDetailService } from '../service/user-detail.service';
import { LogoutService } from '../service/logout.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, finalize, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tokenDetails: any;
  token: any;
  result: any;
  id_token: any;

  constructor(private userDetailService: UserDetailService, private logoutService: LogoutService,
              private http: HttpClient) { }

  ngOnInit(): void {
    console.log('Token: ', localStorage.getItem('token'));
    console.log('Id Token: ', localStorage.getItem('id_token'));
    this.id_token = localStorage.getItem('id_token');
    this.token = localStorage.getItem('token');

    if (this.token) {
      // const base64Url = this.token.split('.')[1];      
      // const base64 = base64Url.replace('-', '+').replace('_', '/');
      // this.tokenDetails = JSON.parse(atob(base64));

      console.log('Access Token Detail: ', this.token);
    }
  }

  detail() {
    this.token = localStorage.getItem('token');    
    this.userDetailService.getUserDetails(this.token).subscribe(data => {
      console.log('user info: ' + JSON.stringify(data));
    })
  }

  logout(): void {
    this.token = localStorage.getItem('token');    
    this.id_token = localStorage.getItem('id_token');  
    this.logoutService.endSession(this.token, this.id_token).subscribe(data => {
      //console.log('user info: ' + JSON.stringify(data));
      window.location.assign(environment.postLogoutRedirectURL);
    })        
  }

}