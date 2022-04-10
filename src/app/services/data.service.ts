import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllCharacters, Character } from '../interfaces/characters-interface';

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

  getASingleCharacter(number: number): Observable<Character> {
    const url = `https://rickandmortyapi.com/api/character/${number}`
    return this.http.get<Character>(url);
  }
}
