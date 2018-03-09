import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeathService } from './weath.service';
import { RouterModule } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { HttpModule } from '@angular/http';

const appRoutes = [
  {path: '', component: HomeComponent},
  {path: 'setting', component: SettingComponent},
  {path: 'home', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [WeathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
