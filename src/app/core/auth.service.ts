import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private storageKey = 'nameksoft_user';

  // credenciales fijas (puedes cambiarlas)
  private readonly user = { email: 'admin@nameksoft.local', password: 'admin123' };

  login(email: string, password: string): boolean {
    if (email === this.user.email && password === this.user.password) {
      localStorage.setItem(this.storageKey, JSON.stringify({ email }));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.storageKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.storageKey);
  }

  getUserEmail(): string | null {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return null;
    try { return JSON.parse(raw).email; } catch { return null; }
  }
}