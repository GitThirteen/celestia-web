import { Injectable } from '@angular/core';
import { Dev } from '../dtos/dev';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals/globals';
import {Observable, of} from 'rxjs';

type FetchOption = 'All'|'Celestia'|'Devs';

@Injectable({
  providedIn: 'root'
})
export class DiscordService {
  private baseUri: string = this.globals.backendUri;

  constructor(
    private globals: Globals,
    private http: HttpClient
  ) { }

  async loadProfileImages(): Promise<void> {
    const avatars = await this.http.get<Dev[]>(`${this.baseUri}/avatars`).toPromise();
    localStorage.setItem('avatars', JSON.stringify(avatars));
  }

  getProfileImage(option: FetchOption): Observable<Dev[]> {
    const items = localStorage.getItem('avatars');
    if (items === null) {
      throw new Error('LocalStorage is empty! Please load the images first!');
    }

    const avatars = JSON.parse(items);
    switch (option) {
      case 'All':
        return of(avatars);
      case 'Celestia':
        return of(avatars.slice(0, 1));
      case 'Devs':
        return of(avatars.slice(1));
    }
  }
}
