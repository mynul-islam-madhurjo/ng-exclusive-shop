import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      take(1),
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          localStorage.setItem('returnUrl', state.url);
          this.router.navigate(['auth/login']);
          return false;
        }
        return true;
      }),
    );
  }
}