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
import { Info1Component } from './pages/contact/info1/info1.component';
import { Info2Component } from './pages/contact/info2/info2.component';
import { Info3Component } from './pages/contact/info3/info3.component';
import { RegisterComponent } from './pages/register/register.component';
import { UprofileComponent } from './pages/uprofile/uprofile.component';


const routes: Route = [
  
  // {path: '', redirectTo:'/home', pathMath: 'full'},
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  { path: 'service', component: ServiceComponent },
  { path: 'about', component: AboutComponent },
  { 
    path: 'contact',
    component: ContactComponent,
    children: [
      {path:'info1', component:Info1Component},
      {path:'info2', component:Info2Component},
      {path:'info3', component:Info3Component}
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UprofileComponent },
  { path: '**', component: Info1Component }
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, NavComponent, LmenuComponent, RconComponent, HomeComponent, AboutComponent, ServiceComponent, ContactComponent, Info1Component, Info2Component, Info3Component, RegisterComponent, UprofileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
