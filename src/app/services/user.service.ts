import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

interface LoginResponse {
  status: string;
  data: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `http://localhost:3000/api/users/login`,
      data
    );
  }
  signup(data: { email: string; password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `http://localhost:3000/api/users/signup`,
      data
    );
  }
}
