import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// export interface Box {
//   boxDescription: string,
//   boxPN: string,
//   boxQuantety: number
// }

export class Box {
  Boxs: Array<any> = [];
  // constructor(public boxDescription: string, public boxPN: string, public boxQuantety: string) { }

}

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { };

  // public getData() {
  //   this.data = this.http.get<Box[]>('http://localhost:8080/model');
  //   console.log('HttpService: ' + this.data);
  //   return this.data;
  // }


  public postData(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };
    return this.http.post<any>('http://localhost:8080/model', data, httpOptions);
  }

  // public getByObservable(url: string): Observable<Box[]> {
  //   return this.http.get<Box[]>(url);
  // }

}
