import { Component, OnInit, EventEmitter, Output, Input, Injectable, HostListener  } from '@angular/core';
// import { LmenuComponent } from '../lmenu/lmenu.component';
// import { SideBarService } from '../lmenu/ltoggle.service';
// import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

// @Injectable() 
export class NavComponent implements OnInit {

  ngOnInit() {
  }

    constructor(
    // private sideBarService: SideBarService
  ) { }

  @HostListener('click')
  click() {
    // this.sideBarService.toggle();
  }

}
