import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "drop-dropdown",
  template: `
    <div [formGroup]="group">
      <label for="dropdown" style="font-size:25px">{{label}}:</label>
      <div outsideClick (outsideClick)="close()">
        <input
          type="text"
          placeholder={{placeholder}}
          (click)="open()"
          class="form-control"
          id="dropdown"
          formControlName="firstname"
        />

        <div class="dropdown" *ngIf="show">
          <div
            class="option"
            (click)="selectedValue(option)"
            *ngFor="let option of (options | searchedFilter: getSearch())"
          >
            {{ option.name }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .form-control {
        display: block;
        width: 96.5%;
        height: 34px;
        padding: 6px 12px;
        font-size: 18px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .dropdown {
        width: 98.5%;
        height: auto;
        background-color: #ebebe0;
        border-radius: 4px;
      }
      .option {
        padding: 6px 12px;
        font-size: 18px;
        color: #555;
      }
      .option:hover {
        background-color: #d9d9d9;
        cursor: pointer;
      }
    `
  ]
})
export class DropdownComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() options: any;
  @Input() label:string;
  @Input() placeholder:string;

  show: boolean = false;

  constructor() {}

  ngOnInit() {
    
  }
  selectedValue(value) {
    this.group.patchValue({ firstname: value.name });
    this.show = false;
  }
  close() {
    this.show = false;
  }

  open() {
    this.show = true;
  }

  getSearch() {
    return this.group.value.firstname;
  }
}
