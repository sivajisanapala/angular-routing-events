import { Component, OnInit, EventEmitter, Input, HostBinding } from '@angular/core';

import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-lmenu',
  templateUrl: './lmenu.component.html',
  styleUrls: ['./lmenu.component.css']
})
export class LmenuComponent implements OnInit {

  // constructor(private clickevent:NavComponent) { 

  // }
  @HostBinding('class.is-open')
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
  }
// @Input() myEvent: any;
}