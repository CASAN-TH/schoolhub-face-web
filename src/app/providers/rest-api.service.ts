import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem('token-admin@schoolhub');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  get(url: string) {
    return this.http.get(url, { headers: this.authorizationHeader() }).toPromise();
  }

  post(url: string, Body: any) {
    return this.http.post(url, Body, { headers: this.authorizationHeader() }).toPromise();
  }

  put(url: string, Body: any) {
    return this.http.put(url, Body, { headers: this.authorizationHeader() }).toPromise();
  }

  delete(url: string) {
    return this.http.delete(url, { headers: this.authorizationHeader() }).toPromise();
  }
}
