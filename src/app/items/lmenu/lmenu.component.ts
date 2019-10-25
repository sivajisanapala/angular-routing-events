import { Component, OnInit, EventEmitter, Input, HostBinding } from '@angular/core';

import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-lmenu',
  templateUrl: './lmenu.component.html',
  styleUrls: ['./lmenu.component.css']
})
export class LmenuComponent implements OnInit {

  ngOnInit() {
  }
  
  @HostBinding('class.is-open') @Input()
  isOpen = false;

}