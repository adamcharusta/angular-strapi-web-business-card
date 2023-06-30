import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequestType, LoginResponseType } from '../auth.types';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = `${environment.apiUrl}/auth/`;
  private tokenKey = 'jwtToken';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  public login(payload: LoginRequestType): Observable<LoginResponseType> {
    return this.http.post<LoginResponseType>(this.url + 'local', payload).pipe(
      tap((res: LoginResponseType) => {
        const token = res.jwt;
        this.saveToken(token);
      })
    );
  }

  public logout(): void {
    this.removeToken();
  }

  public getToken(): string | null {
    return this.cookieService.get(this.tokenKey);
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private saveToken(token: string): void {
    this.cookieService.set(this.tokenKey, token);
  }

  private removeToken(): void {
    this.cookieService.delete(this.tokenKey);
  }
}
