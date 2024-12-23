import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USER_KEY = 'current_user';
  private readonly USERS_KEY = 'registered_users';
  private readonly TOKEN_KEY = 'auth_token';

  private isAuthenticated = new BehaviorSubject<boolean>(this.hasValidToken());
  private currentUser = new BehaviorSubject<User | null>(
    this.getUserFromStorage(),
  );

  isAuthenticated$ = this.isAuthenticated.asObservable();
  currentUser$ = this.currentUser.asObservable();

  constructor(private router: Router) {
    window.addEventListener('storage', (event) => {
      if (event.key === this.TOKEN_KEY) {
        this.isAuthenticated.next(this.hasValidToken());
        this.currentUser.next(this.getUserFromStorage());
      }
    });
  }

  private hasValidToken(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return !!token;
  }

  private getUserFromStorage(): User | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    try {
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  }

  private getRegisteredUsers(): User[] {
    const usersStr = localStorage.getItem(this.USERS_KEY);
    try {
      return usersStr ? JSON.parse(usersStr) : [];
    } catch {
      return [];
    }
  }

  async register(
    name: string,
    email: string,
    password: string,
  ): Promise<boolean> {
    try {
      const users = this.getRegisteredUsers();

      // Check if email already exists
      if (users.some((user) => user.email === email)) {
        throw new Error('Email already registered');
      }

      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
      };

      // Add new user to registered users
      users.push(newUser);
      localStorage.setItem(this.USERS_KEY, JSON.stringify(users));

      // Create user session
      const token = 'auth_token_' + Date.now();
      const sessionUser = { ...newUser };
      // @ts-ignore
      delete sessionUser.password;

      localStorage.setItem(this.USER_KEY, JSON.stringify(sessionUser));
      localStorage.setItem(this.TOKEN_KEY, token);

      this.currentUser.next(sessionUser);
      this.isAuthenticated.next(true);

      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      const users = this.getRegisteredUsers();
      const user = users.find((u) => u.email === email);

      if (!user || user.password !== password) {
        throw new Error('Invalid email or password');
      }

      const token = 'auth_token_' + Date.now();
      const sessionUser = { ...user };
      // @ts-ignore
      delete sessionUser.password;

      localStorage.setItem(this.USER_KEY, JSON.stringify(sessionUser));
      localStorage.setItem(this.TOKEN_KEY, token);

      this.currentUser.next(sessionUser);
      this.isAuthenticated.next(true);

      return true;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.TOKEN_KEY);

    this.currentUser.next(null);
    this.isAuthenticated.next(false);

    this.router.navigate(['/auth/login']);
  }
}
