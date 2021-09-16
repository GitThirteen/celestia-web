import { Injectable } from '@angular/core';
import { DiscordUserData } from '../dtos/discordUserData';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals/globals';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscordService {
  private baseUri: string = this.globals.backendUri;

  constructor(
    private globals: Globals,
    private http: HttpClient
  ) { }

  loadDiscordUserData(): Observable<DiscordUserData[]> {
    if (!sessionStorage.getItem('userData')) {
      this.http.get<DiscordUserData[]>(`${this.baseUri}/avatars`).subscribe(data => {
        sessionStorage.setItem('userData', JSON.stringify(data));
      });
    }

    const items = sessionStorage.getItem('userData');
    if (!items) {
      throw new Error('No value for the key \'userData\' could be found in SessionStorage.');
    }

    return of(JSON.parse(items));
  }
}
