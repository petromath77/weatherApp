import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeathService {

  apiKey: string = '1a6e426a59a3456b';
  url: string;

  constructor(private http: Http) { 
    this.url = 'http://api.wunderground.com/api/';
  }

  getWeather(country, city){
    return this.http.get(this.url + this.apiKey + '/conditions/q/' + country + '/' + city + '.json').map(res=> res.json());
  }

}
