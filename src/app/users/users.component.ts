import { Component, OnInit } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {User} from '../user'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent implements OnInit {
  user:User;
  constructor(private http:HttpClient) {
    this.user = new User(0,0,0,"","","","");

     
  }
   
  ngOnInit() {
  
    interface ApiResponse{
     followers:number;
     following:number;
     public_repos:number;
     location:string;
     html_url:string;
     avatar_url:string;
     login:string;


    }
   
    this.http.get<ApiResponse>('https://api.github.com/users/daneden?access_token'+ environment.apiKey).subscribe(data=>{
      this.user= new User(data.followers,data.following,data.public_repos,data.location,data.html_url,data.avatar_url,data.login);
    })
  }

}
