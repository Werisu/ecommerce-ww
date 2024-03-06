import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ListUsersService {
  readonly apiUrl = 'https://65009f9718c34dee0cd53786.mockapi.io';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`, {
      params: {
        page: 1,
        limit: 6,
      },
    });
  }
}
