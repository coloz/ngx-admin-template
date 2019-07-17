import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ServerInterceptor implements HttpInterceptor {

    constructor(
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
                // console.log(req);
                // console.log(event);
                if (event instanceof HttpResponse && event.status == 200) {
                    if (typeof event.body.message != 'undefined' && event.body.message != 1000) {
                        this.processErrorCode(event.body.message)
                    }
                    return event;
                }
            }),
            catchError((err: any, caught) => {
                if (err instanceof HttpErrorResponse) {
                    // if (err.status === 403) {
                    //   console.info('err.error =', err.error, ';');
                    // }
                    // if (err.status >= 500) {
                    //   console.info('err.error =', err.error, ';');
                    // }
                    this.processErrorResponse(err.status);
                    return Observable.throw(err);
                }
            })
        );
    }

    processErrorResponse(statusCode) {
        // this.events.publish("provider:notice", 9999);
    }

    processErrorCode(code) {
        // console.log(code);
        //跳转到登录页
        if (code == 1400) {
            this.router.navigateByUrl('/auth');
        }
    }

}