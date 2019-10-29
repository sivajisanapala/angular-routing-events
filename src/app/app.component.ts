import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }

  mi_state = false;
  toggleMenu() {

    if(this.mi_state == false){
      this.mi_state = !this.mi_state;
    }else{
      this.mi_state = !this.mi_state;
    }
  }
   
}
  