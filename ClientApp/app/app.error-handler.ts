import * as Raven from 'raven-js';
import { ToastyService } from 'ng2-toasty';

import { ErrorHandler, Inject, NgZone } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    constructor(
        @Inject(NgZone) private ngZOne: NgZone,
        @Inject(ToastyService) private toastyService: ToastyService) {
    }
    
    handleError(error: any): void {
        
        Raven.captureException(error.originalError || error);

        this.ngZOne.run(() => {
            this.toastyService.error({
                title: 'Error',
                msg: 'An unexpected error happened.',
                theme: 'bootstrap',
                timeout: 5000
            });
        });
    }
}