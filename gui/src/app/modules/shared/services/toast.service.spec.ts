import { TestBed } from '@angular/core/testing';
import { IndividualConfig, ToastrService } from 'ngx-toastr';
import { TranslocoService } from '@ngneat/transloco';
import { UcFirstPipe } from 'ngx-pipes';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;
  let toastr: jasmine.SpyObj<ToastrService>;
  let translocoService: jasmine.SpyObj<TranslocoService>;
  let ucFirstPipe: jasmine.SpyObj<UcFirstPipe>;
  let config: Partial<IndividualConfig>;

  beforeEach(() => {
    toastr = jasmine.createSpyObj('ToastrService', [
      'success',
      'info',
      'warning',
      'error',
    ]);
    translocoService = jasmine.createSpyObj('TranslocoService', ['translate']);
    ucFirstPipe = jasmine.createSpyObj('UcFirstPipe', ['transform']);

    TestBed.configureTestingModule({
      providers: [
        ToastService,
        { provide: ToastrService, useValue: toastr },
        { provide: TranslocoService, useValue: translocoService },
        { provide: UcFirstPipe, useValue: ucFirstPipe },
      ],
    });

    service = TestBed.inject(ToastService);
    config = {};
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('success', () => {
    it('should call toastr.success with correct parameters', () => {
      const message = 'Test success message';
      const translatedMessage = 'Success';
      const transformedMessage = 'Success';

      translocoService.translate.and.returnValue(translatedMessage);
      ucFirstPipe.transform.and.returnValue(transformedMessage);
      service.success(message, config);

      expect(toastr.success).toHaveBeenCalledWith(
        message,
        transformedMessage,
        config
      );
    });
  });

  describe('info', () => {
    it('should call toastr.info with correct parameters', () => {
      const message = 'Test info message';
      const translatedMessage = 'Info';
      const transformedMessage = 'Info';

      translocoService.translate.and.returnValue(translatedMessage);
      ucFirstPipe.transform.and.returnValue(transformedMessage);
      service.info(message, config);

      expect(toastr.info).toHaveBeenCalledWith(
        message,
        transformedMessage,
        config
      );
    });
  });

  describe('warn', () => {
    it('should call toastr.warn with correct parameters', () => {
      const message = 'Test warn message';
      const translatedMessage = 'Warn';
      const transformedMessage = 'Warn';

      translocoService.translate.and.returnValue(translatedMessage);
      ucFirstPipe.transform.and.returnValue(transformedMessage);
      service.warn(message, config);

      expect(toastr.warning).toHaveBeenCalledWith(
        message,
        transformedMessage,
        config
      );
    });
  });

  describe('error', () => {
    it('should call toastr.error with correct parameters', () => {
      const message = 'Test error message';
      const translatedMessage = 'Error';
      const transformedMessage = 'Error';

      translocoService.translate.and.returnValue(translatedMessage);
      ucFirstPipe.transform.and.returnValue(transformedMessage);
      service.error(message, config);

      expect(toastr.error).toHaveBeenCalledWith(
        message,
        transformedMessage,
        config
      );
    });
  });
});
