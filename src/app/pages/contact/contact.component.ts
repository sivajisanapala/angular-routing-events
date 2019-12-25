import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 routes = [
    {linkName: 'info1',url: 'info1'},
    {linkName: 'info2',url: 'info2'},
    {linkName: 'info3',url: 'info3'}
  ]

}