import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';

let mm:any = [
	MatToolbarModule,
	MatButtonModule,
	MatTableModule,
	MatInputModule,
	MatFormFieldModule,
	MatPaginatorModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
	...mm
  ],
  exports: [
	...mm
  ]
})
export class MaterialModule { }
