import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  constructor(
    private http: HttpClient,
  ) { }

  getFile() {
    // return this.http.get('docs/000-首页.md')
  }

  getSource(src: string) {
    return this.http.get(src, { responseType: 'text' })
  }

}
