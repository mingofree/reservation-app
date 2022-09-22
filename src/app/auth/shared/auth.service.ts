import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt"

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
  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/register', userData);
  }

  login(userData: UserData): Observable<string> {
    return this.http.post<string>('/api/v1/users/login', userData).pipe(
      map((token: string) => {
        this.decodedToken = jwt.decodeToken(token)
        localStorage.setItem('app-auth', token);
        localStorage.setItem('app-meta', JSON.stringify(this.decodedToken))
        return token;
      })
    );
  }
}
