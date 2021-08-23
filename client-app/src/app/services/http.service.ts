import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getData() {
    console.log('HttpService: ' + this.data);
    this.data = this.http.get<Box[]>('http://localhost:8080/box');
    console.log(this.data)
    return this.data;
  }

}
