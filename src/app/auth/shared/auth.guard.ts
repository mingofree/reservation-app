import { Injectable } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
	console.log('canActivate');
    if (this.authService.isAuthenticated()) return true;

    this.router.navigate(['/login']);
    return false;
  }
}
