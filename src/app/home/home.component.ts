import { Component, OnInit } from '@angular/core';
import { WeathService } from '../weath.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location={
    country: 'belarus',
    city: 'minsk'
  };
  weather:any;

  constructor(private weathService: WeathService) { }

  ngOnInit() {
    this.weathService.getWeather(this.location.country, this.location.city).subscribe(weather => {
      this.weather = weather.current_observation;
    });
  }

}
