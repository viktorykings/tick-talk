import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProfile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseURL = 'https://icherniakov.ru/yt-course';
  getTestAccounts() {
    return this.http.get<IProfile[]>(`${this.baseURL}/account/test_accounts`);
  }
  getMe() {
    return this.http.get<IProfile>(`${this.baseURL}/account/me`);
  }
}
