import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit, AfterViewInit {

@Input() formData?:any;

  $boxsList: any[] = [];
  $model: string = '';
  $length: string = '';

  constructor() { }

ngAfterViewInit(){

  console.log('box component ', this.formData)
}

  ngOnInit(): void {
  }

}
