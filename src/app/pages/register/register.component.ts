import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export interface User {
 
}
export class RegisterComponent implements OnInit {

  constructor(
    
  ) { }
  
  

  public courses = ['Angular', 'React', 'Vue'];

  usermodel = new User [];
  ngOnInit() {
  }

}