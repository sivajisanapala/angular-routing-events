import { Component, OnInit, EventEmitter, Output, Input, Injectable, HostListener  } from '@angular/core';
import { LmenuComponent } from '../lmenu/lmenu.component';
// import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

// @Injectable() 
export class NavComponent implements OnInit {

  constructor() { }

  @Input() sideBar: LmenuComponent;

  @HostListener('click')
  click() {
    this.sideBar.toggle();
  }

  ngOnInit() {
  }
  mi_state = false;

  @Output() myEvent = new EventEmitter();

   toggleMenu() {
   
    if(this.mi_state == false){
      this.mi_state = !this.mi_state;
    }else{
      this.mi_state = !this.mi_state;
    }
           
  }

}
