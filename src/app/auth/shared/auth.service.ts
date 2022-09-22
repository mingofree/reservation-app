import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

class DecodedToken {
  userId: string = '';
  username: string = '';
  exp: number = 0;
}

// const jwt = new JwtHelperService();

@Injectable()
export class AuthService {
  private decodedToken!: DecodedToken;
  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/register', userData);
  }

  login(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/login', userData);
    // return this.http.post('/api/v1/users/login', userData).pipe(
      // map((token: string) => {
      //   this.decodedToken = jwt.decodeToken(token);
      //   localStorage.setItem('app-auth', token);
      //   localStorage.setItem('app-meta', JSON.stringify(this.decodedToken));
      //   return token;
      // })
    // );
  }
}
