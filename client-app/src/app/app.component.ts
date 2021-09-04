
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Box, HttpService } from './services/http.service';
import { FormsModule, NgForm } from '@angular/forms';
// import { WebsocketService } from './services/websocket.service';

// export interface configPrinter {
//   model: string,
//   length: string,
//   cutter: boolean,
//   backPrinter: boolean,
//   rollAndType: boolean,
//   slitter: string,
//   backLite:boolean
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // apiBoxsList: Observable<Box[]>;
  boxsList:any[] = [];

  constructor(private http: HttpService) {
    // this.apiBoxsList = this.http.getData();
  }

  public submitForm(form: NgForm) {

    if (!form.valid) {
      alert('Model Printer NOT specified')
      console.log('form not valid: --- printer model not specified');
      // return false;
    } else {

      this.http.postData(form.value).subscribe(a=>{
        console.log('data from app.component', a)
        this.boxsList=a.Boxs
      });
      // .subscribe((data:any) => this.user=new User(data.name, data.age)););
      // .subscribe((data: any) => this.users=data["userList"]);
        // this.apiBoxsList = data["boxs"];

    }

  }


  // public sendModelPrinter() {
  //   let data: any = {
  //     a: "33333333333333333333333333",
  //     b: "f/ssssssssssssssss"
  //   }
  //   this.http.postData(data)
  // }



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
