import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment'
import { Router } from '@angular/router';

class DecodedToken {
  userId: string = '';
  username: string = '';
  exp: number = 0;
}

interface UserData {
  email: string;
  password: string;
}

const jwt = new JwtHelperService();

@Injectable()
export class AuthService {
  private decodedToken!: DecodedToken;
  constructor(private http: HttpClient, private router: Router) {
    const tmpDecodedToken = localStorage.getItem('app-meta');
    if (tmpDecodedToken) {
      this.decodedToken = JSON.parse(tmpDecodedToken);
    } else {
      this.decodedToken = new DecodedToken();
    }
  }

  getToken() {
    return localStorage.getItem('app-auth');
  }

  isAuthenticated() {
    return moment().isBefore(moment.unix(this.decodedToken.exp))
  }

  register(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/register', userData);
  }

  login(userData: UserData): Observable<string> {
    return this.http.post<string>('/api/v1/users/login', userData).pipe(
      map((token: string) => {
        this.decodedToken = jwt.decodeToken(token);
        // console.log(moment.unix(this.decodedToken.exp).toISOString());
        localStorage.setItem('app-auth', token);
        localStorage.setItem('app-meta', JSON.stringify(this.decodedToken));
        return token;
      })
    );
  }

  logout() {
    localStorage.removeItem('app-auth')
    localStorage.removeItem('app-meta')
    this.decodedToken = new DecodedToken()
    this.router.navigate(['/login'])
  }
}
