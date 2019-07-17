import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import * as CryptoJS from 'crypto-js';
import { Store } from '@ngxs/store';
import { Login, Logout } from '../auth/auth.state';
import { API } from 'src/app/configs/api.config';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
        private store: Store
    ) { }

    login(username: string, password: string): Observable<boolean> {
        return this.http.get(API.LOGIN, {
            params: {
                username: username,
                password: CryptoJS.SHA256(password)
            }
        })
            .pipe(
                catchError(this.handleError('login', [])),
                map((response: any) => {
                    if (response.message == 1000) {
                        console.log(response.detail);
                        this.store.dispatch(new Login({ uuid: response.detail.uuid, token: response.detail.token }))
                        return true
                    } else {
                        return false
                    }
                })
            );
    }

    logout() {
        this.store.dispatch(new Logout())
    }

    register(username: string, smscode: string, password: string): Observable<boolean> {
        return this.http.post(API.REGISTER,
            {
                "phone": username,
                "smscode": smscode,
                "password": CryptoJS.SHA256(password),
            })
            .pipe(
                map((response: any) => {
                    if (response.message == 1000) {
                        console.log(response.detail);
                        this.store.dispatch(new Login({ uuid: response.detail.uuid, token: response.detail.token }))
                        return true
                    } else {
                        return false
                    }
                })
            )
    }

    retrieve(username: string, smscode: string, password: string): Observable<boolean> {
        return this.http.post(API.RETRIEVE + `/web/retrieve`,
            {
                "phone": username,
                "smscode": smscode,
                "password": CryptoJS.SHA256(password),
            })
            .pipe(
                map((response: any) => {
                    if (response.message == 1000) {
                        console.log(response.detail);
                        return true
                    } else {
                        return false
                    }
                })
            )
    }

    sendSmscode(phone, sendType) {
        return this.http.get(API.SMSCODE, {
            params: {
                phone: phone,
                sendType: sendType
            }
        }).toPromise().then(
            (response: any) => {
                if (response.message == 1000) {
                    console.log(response.detail);
                    return true
                } else {
                    return false
                }
            })
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
