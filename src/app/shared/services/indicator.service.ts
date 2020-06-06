import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Indicator } from '../models/indicator.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {
  apiUrl = 'https://mindicador.cl/api'
  constructor(private _httpClient: HttpClient) { }

  getDailyIndicators(): Observable<Indicator[]>{
    return this._httpClient.get<Indicator[]>(this.apiUrl)
                           .pipe( map( res => Object.keys(res).reduce( (acc, cur) => res[cur].codigo ? [ ...acc, { ...res[cur] } ] : acc , []) ));
  }

  getIndicator(name: string): Observable<Indicator>{
    const uri = `${this.apiUrl}/${name}`;
    return this._httpClient.get<Indicator>(uri);
  }

  getIndicatorByDay(name: string, date: string): Observable<Indicator>{
    const uri = `${this.apiUrl}/${name}/${date}`;
    return this._httpClient.get<Indicator>(uri);
  }

  getIndicatorByYear(name: string, year: string): Observable<Indicator>{
    const uri = `${this.apiUrl}/${name}/${year}`;
    return this._httpClient.get<Indicator>(uri);
  }
}
