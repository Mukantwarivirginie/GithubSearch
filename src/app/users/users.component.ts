import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import { environment } from '../../environments/environment';
import {ServiceRequestService} from '../user-http/service-request.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers:[ServiceRequestService], //add the providers to the component
  styleUrls: ['./users.component.css'],
})

export class UsersComponent implements OnInit {
  user:User;
  constructor(private userService:ServiceRequestService) {
    // this.user = new User(0,0,0,"","","","");
  }
  
   
  ngOnInit() {
    this.userService.userRequest()
    this.user=this.userService.user
  }

}

