import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Select } from '@ngxs/store';
import { AuthState, AuthStateModel } from './auth.state';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  @Select(AuthState) authState$: Observable<AuthStateModel>

  constructor(
    // private store: Store,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.authState$
      .pipe(
        map((authState: AuthStateModel) => {
          // console.log(authState);
          if (authState.isLogin) {
            return true
          } else {
            this.router.navigateByUrl('/auth');
            return false
          }
        }),
      );
  }
}
