import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  log(message: string, ...data: unknown[]): void {
    console.log(`[App] ${message}`, ...data);
  }

  error(message: string, ...data: unknown[]): void {
    console.error(`[App] ${message}`, ...data);
  }
}
