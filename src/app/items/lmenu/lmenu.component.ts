import { Component, OnInit, EventEmitter, Input, HostBinding } from '@angular/core';

import { SideBarService } from './ltoggle.service';

@Component({
  selector: 'app-lmenu',
  templateUrl: './lmenu.component.html',
  styleUrls: ['./lmenu.component.css']
})
export class LmenuComponent implements OnInit {


@HostBinding('class.is-open')
  isOpen = false;

  constructor(
    private sideBarService: SideBarService
  ) { }

  ngOnInit() {
    this.sideBarService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }
}