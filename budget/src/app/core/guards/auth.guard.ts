import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// Replace with your real auth check (e.g. inject an AuthService)
const isAuthenticated = (): boolean => true;

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/']);
};
