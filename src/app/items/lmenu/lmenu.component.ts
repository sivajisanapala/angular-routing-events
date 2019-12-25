import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lmenu',
  templateUrl: './lmenu.component.html',
  styleUrls: ['./lmenu.component.css']
})
export class LmenuComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
   
  }

  routes = [
    {linkName: 'Home',url: 'home'},
    {linkName: 'Service',url: 'service'},
    {linkName: 'About',url: 'about'},
    {linkName: 'Contact',url: 'contact'},
    {linkName: 'Register',url: 'register'},
    {linkName: 'Profile',url: 'profile'}
  ]
}