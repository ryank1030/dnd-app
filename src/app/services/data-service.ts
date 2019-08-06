import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Spells} from '../models/spells';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly url = 'http://www.dnd5eapi.co/api';

  constructor(
    private http: HttpClient
  ) { }

  //
  //
  //TODO: The Obeserable <any> will probably need to be changed
  //
  //
  //

  getSpells(): Observable<Spells> {
    return this.http.get<Spells>(this.url + '/spells');
  }

  getSpellDetails(id): Observable<any> {
    return this.http.get<any>(this.url + '/spells/' + id);
  }

  getClasses(): Observable<any> {
    return this.http.get<any>(this.url + '/classes');
  }

  getClassDetails(id): Observable<any> {
    return this.http.get<any>(this.url + '/classes/' + id);
  }

  getFeatures(): Observable<any> {
    return this.http.get<any>(this.url + '/features');
  }

  getAbilityscores(): Observable<any> {
    return this.http.get<any>(this.url + '/ability-scores');
  }

  getAbilityscoreDetails(id): Observable<any> {
    return this.http.get<any>(this.url + '/ability-scores/' + id);
  }
}
