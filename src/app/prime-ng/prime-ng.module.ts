import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';



@NgModule({
  declarations: [],
  exports: [
    CardModule,
    MenubarModule,
    FieldsetModule
    
  ],
  imports: [
    CommonModule,
    
  ]
})
export class PrimeNgModule { }
