import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Box {
  boxDescription: string,
  boxPN: string,
  boxQuantety: number
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  data: any;

  constructor(private http: HttpClient) { };

  public getData() {
    this.data = this.http.get<Box[]>('http://localhost:8080/box');
    console.log('HttpService: ' + this.data);
    return this.data;
  }

  // public getByObservable(url: string): Observable<Box[]> {
  //   return this.http.get<Box[]>(url);
  // }

}
