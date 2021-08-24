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
    this.data = this.http.get<Box[]>('http://localhost:8080/model');
    console.log('HttpService: ' + this.data);
    return this.data;
  }

 
  public postData() {
    this.data = this.http.post('http://localhost:8080/model',{hhhhhhhhhh:"jhjfngfkngkfmgfkg"});
   
  }

  // public getByObservable(url: string): Observable<Box[]> {
  //   return this.http.get<Box[]>(url);
  // }

}
