import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllCharacters } from '../interfaces/characters-interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCharacters(): Observable<AllCharacters> {
    const url = 'https://rickandmortyapi.com/api/character'
    return this.http.get<AllCharacters>(url);
  }
}
