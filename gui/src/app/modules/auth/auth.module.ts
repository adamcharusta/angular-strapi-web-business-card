import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { NgStringPipesModule } from 'ngx-pipes';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslocoModule,
    ButtonModule,
    CardModule,
    NgStringPipesModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    DividerModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'auth' }, AuthService],
})
export class AuthModule {}
