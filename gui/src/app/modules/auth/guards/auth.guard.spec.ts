import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
        {
          provide: AuthService,
          useValue: { isLoggedIn: jasmine.createSpy('isLoggedIn') },
        },
      ],
    });

    authGuard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should allow route when user is logged in', () => {
    (authService.isLoggedIn as jasmine.Spy).and.returnValue(true);

    const can = authGuard.canActivate();

    expect(can).toBeTrue();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should not allow route and should navigate to login when user is not logged in', () => {
    (authService.isLoggedIn as jasmine.Spy).and.returnValue(false);

    const can = authGuard.canActivate();

    expect(can).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
