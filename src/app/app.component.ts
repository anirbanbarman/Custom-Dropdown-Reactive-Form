import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
export interface IUser {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'my-component-library';
  form:FormGroup;
  options: IUser[] = [
    {name: 'Anirban'},
    {name: 'Yo'},
    {name: 'Titun'}
  ];
  constructor(private fb: FormBuilder){

  }
ngOnInit(){
  this.form = this.fb.group({
    firstname: new FormControl("", Validators.required)});

}

}
