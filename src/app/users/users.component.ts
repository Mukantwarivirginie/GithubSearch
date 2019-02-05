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
 

     
  }
   
  ngOnInit() {
    this.http.get ('https://api.github.com/users/daneden?access_token'+environment.apiKey).subscribe(data=>{
      // Successful API request.
  })
}

}
