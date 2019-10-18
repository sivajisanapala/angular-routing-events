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


const appRoute: Route = [
  
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  { path: 'service', component: ServiceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoute) ],
  declarations: [ AppComponent, NavComponent, LmenuComponent, RconComponent, HomeComponent, AboutComponent, ServiceComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
