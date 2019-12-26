import { Component, OnInit } from '@angular/core';
import { User } from  './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  constructor(
    
  ) { }
  
  

  public courses = ['Angular', 'React', 'Vue'];

  usermodel = new User ('swathi', 'swat@test', 435355, '')
  ngOnInit() {
  }

}