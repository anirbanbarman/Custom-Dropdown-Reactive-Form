import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutsideClickDirective } from './dropdown.derective';
import { SearchFilterPipe } from './search-filter-pipe';


@NgModule({
  declarations: [DropdownComponent,OutsideClickDirective,SearchFilterPipe],
  imports: [CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports: [DropdownComponent]
})
export class DropdownModule { }
