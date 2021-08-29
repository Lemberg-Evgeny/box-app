import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

// export interface Box {
//   boxDescription: string,
//   boxPN: string,
//   boxQuantety: number
// }

export class Box {
  Boxs: any;
  // constructor(public boxDescription: string, public boxPN: string, public boxQuantety: string) { }
  constructor() { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // data: any;
  // post: any;

  constructor(private http: HttpClient) {
    // this.http.post('http://localhost:8080/model', { ffffff: "1111111" }, {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     Authorization: 'my-auth-token'
    //   })
    // })
  };

  // public getData() {
  //   this.data = this.http.get<Box[]>('http://localhost:8080/model');
  //   console.log('HttpService: ' + this.data);
  //   return this.data;
  // }


  public postData(data: any): Observable<Box> {
    // this.http.post('http://localhost:8080/model',{dshgkh:"djjdffbhfgb"});
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     Authorization: 'my-auth-token'
    //   })
    // };
    return this.http.post<Box>('http://localhost:8080/model', data);
    // (d => {
    //   // console.log(d)
    //   return d;
    // });

  }

  // public getByObservable(url: string): Observable<Box[]> {
  //   return this.http.get<Box[]>(url);
  // }

}
