import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeathService } from './weath.service';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes= [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'setting', component: SettingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [WeathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
