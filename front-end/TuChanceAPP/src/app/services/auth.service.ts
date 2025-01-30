import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/token/';
  private _storage: Storage | null = null;

  constructor(private http: HttpClient, private router: Router, private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  login(username: string, password: string) {
    return this.http.post(this.apiUrl, { username, password }).toPromise()
      .then(async (res: any) => {
        await this._storage?.set('access_token', res.access);
        await this._storage?.set('refresh_token', res.refresh);
        this.router.navigate(['tabs']);
      })
      .catch(err => {
        console.error('Login error', err);
      });
  }

  async logout() {
    await this._storage?.remove('access_token');
    await this._storage?.remove('refresh_token');
    this.router.navigate(['/login']);
  }

  async getToken() {
    return await this._storage?.get('access_token');
  }
}
