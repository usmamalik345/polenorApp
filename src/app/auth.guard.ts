import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../app/services/auth.service'; // Use AuthService to check the authentication state

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    // User is logged in
    return true;
  } else {
    // User is not logged in
    router.navigate(['/login']);
    return false;
  }
};
