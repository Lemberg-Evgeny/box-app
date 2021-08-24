import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Box, HttpService } from './services/http.service';
// import { WebsocketService } from './services/websocket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any;

  apiBoxsList: Observable<Box[]>;
  // apiBoxsList: any[];

  constructor(private http: HttpService) {
    this.apiBoxsList = this.http.getData();
    // this.apiBoxsList = this.http.getData();
    // this.getData();
  }

public postData(){
  this.http.postData()
}

  // Observable classic examples
  // public getData() {
  //   this.http.getByObservable('http://localhost:8080/box').subscribe(value => {
  //     // value - результат
  //     console.log('data app.component: ' + value);
  //     return this.data = value;

  //   },
  //     error => {
  //       // error - объект ошибки
  //       console.log(error);
  //     });
  // }



}
