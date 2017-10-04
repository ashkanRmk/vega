import * as Raven from 'raven-js';

import { AppErrorHandler } from './app.error-handler';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';

/* Raven Configuration at sentry.io */
Raven
    .config('https://554c59060e954d4296333e598654fef5@sentry.io/225953')
    .install();


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppModuleShared
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl },
        { provide: ErrorHandler, useClass: AppErrorHandler },

    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
