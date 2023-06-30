import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { TranslocoService } from '@ngneat/transloco';
import { UcFirstPipe } from 'ngx-pipes';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private conf: Partial<IndividualConfig> = {};

  constructor(
    private toastr: ToastrService,
    private translocoService: TranslocoService,
    private ucFirst: UcFirstPipe
  ) {}

  private prepareTitle(title: string): string {
    return this.ucFirst.transform(title);
  }

  public success(message: string, config = this.conf): void {
    this.toastr.success(
      message,
      this.prepareTitle(this.translocoService.translate('toast.success')),
      config
    );
  }

  public info(message: string, config = this.conf): void {
    this.toastr.info(
      message,
      this.prepareTitle(this.translocoService.translate('toast.info')),
      config
    );
  }

  public warn(message: string, config = this.conf): void {
    this.toastr.warning(
      message,
      this.prepareTitle(this.translocoService.translate('toast.warn')),
      config
    );
  }

  public error(message: string, config = this.conf): void {
    this.toastr.error(
      message,
      this.prepareTitle(this.translocoService.translate('toast.error')),
      config
    );
  }
}
