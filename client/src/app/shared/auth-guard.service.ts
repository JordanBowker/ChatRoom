import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private readonly _userService: UserService, 
              private readonly _router: Router) { }

  canActivate() {
    return this._userService.username$.pipe(map(x => {
      if (x) {
        return true;
      } else {
        this._router.navigate(['']);
        return false;
      }
    }));
  }
}
