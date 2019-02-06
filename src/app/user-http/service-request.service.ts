import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestService {
  user:User;
  constructor(private http:HttpClient) {
    this.user = new User(0,0,0,"","","","");
}
userRequest(userName){
  var userSearch = userName
  interface ApiResponse{
      
    followers:number;
    following:number;
    public_repos:number;
    location:string;
    html_url:string;
    avatar_url:string;
    login:string;


   }
let promise =new Promise((resolve,reject)=>{
    this.http.get<ApiResponse>('https://api.github.com/users/' + userSearch + '?access_token=5b3fb8ab4b85dbc4f9e7cd253398945250496d99').toPromise().then(response=>{
        
        this.user.followers=response.followers
        this.user.following=response.following
        this.user.public_repos=response.public_repos
        this.user.location=response.location
        this.user.html_url=response.html_url
        this.user.avatar_url=response. avatar_url
        this.user.login=response. login
        

        resolve()
    },
    error=>{
            this.user. followers=0
            this.user. following=0
            this.user. public_repos =0
            this.user.location  =""
            this.user. html_url  =""
            this.user.avatar_url  =""
            this.user.login =""
            reject(error)
        }
    )
})

return promise
}
}