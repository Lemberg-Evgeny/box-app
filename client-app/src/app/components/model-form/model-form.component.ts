import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.scss']
})
export class ModelFormComponent {
  // formIsShow:boolean = true;

  $boxsList: any[] = [];
  $model: string = '';
  $length: string = '';

  constructor(private http: HttpService) { }

  public submitForm(form: NgForm) {

    if (!form.valid) {
      alert('Model Printer NOT specified')
      console.log('form not valid: --- printer model not specified');
    } else {
      console.log(form.value)
      this.http.postData(form.value).subscribe((configuration: any) => {
        console.log('data from app.component', configuration)
        this.$boxsList = configuration;
        this.$model = configuration[0].model;
        this.$length = configuration[0].length;
       
      });

    }

    // this.formIsShow = false;

  }

}
