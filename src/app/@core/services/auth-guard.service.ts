import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
  ) { }

  public canActivate(): boolean {
    if (sessionStorage.getItem('players')) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
