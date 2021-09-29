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
  private readonly _invite = 'https://discordapp.com/oauth2/authorize?&client_id=504406400848625687&scope=bot&permissions=388160';

  constructor(
    private globals: Globals,
    private http: HttpClient
  ) { }

  get invite(): string {
    return this._invite;
  }

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
