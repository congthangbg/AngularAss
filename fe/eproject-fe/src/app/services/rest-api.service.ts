import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  constructor(private http: HttpClient) {}

  getAll(link: string) {
    return this.http.get<any>(link).toPromise();
  }
  getById(link: string, id: string) {
    return this.http.get<any>(link + '/' + id).toPromise();
  }
  post(link: string, data: any) {
    return this.http.post<any>(link, data).toPromise();
  }
  put(link: string, id: string, data: any) {
    return this.http.post<any>(link + '/' + id, data).toPromise();
  }
  delete(link: string, id: string) {
    return this.http.delete<any>(link + '/' + id).toPromise();
  }
}
