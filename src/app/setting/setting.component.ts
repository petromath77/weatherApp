import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  country: string;
  city: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  saveForm(){
    let location = {
      country: this.country,
      city: this.city
    }
    localStorage.setItem('location', JSON.stringify(location));
    this.route.navigate(['home']);
  }
}
