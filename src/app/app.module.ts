import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './items/nav/nav.component';
import { LmenuComponent } from './items/lmenu/lmenu.component';
import { RconComponent } from './items/rcon/rcon.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Contact1Component } from './pages/contact/items/contact1/contact1.component';
import { Contact2Component } from './pages/contact/items/contact2/contact2.component';
import { Contact3Component } from './pages/contact/items/contact3/contact3.component';


const appRoute: Route = [
  
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  { path: 'service', component: ServiceComponent },
  { path: 'about', component: AboutComponent },
  { 
    path: 'contact',
    component: ContactComponent,
    childern: [
      {path:'info', component:Contact1Component},
      {path:'info', component:Contact2Component},
      {path:'info', component:Contact3Component}
    ]
  }
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoute) ],
  declarations: [ AppComponent, NavComponent, LmenuComponent, RconComponent, HomeComponent, AboutComponent, ServiceComponent, ContactComponent, Contact1Component, Contact2Component, Contact3Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
