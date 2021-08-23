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

  slitter: any;

  boxsList: Array<any> = [
    'shaft',
    'BL-30076',
    12
  ]

  apiBoxsList: Observable<Box[]>;
  // apiBoxsList: any[];

  constructor(private http: HttpService) {
    // this.apiBoxsList = this.http.getData();
    this.apiBoxsList = this.http.getData();
  }



}
