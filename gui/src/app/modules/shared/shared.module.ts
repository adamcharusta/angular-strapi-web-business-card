import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './services/toast.service';
import { NgPipesModule, UcFirstPipe } from 'ngx-pipes';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgPipesModule, TranslocoModule],
  providers: [ToastService, UcFirstPipe],
})
export class SharedModule {}
