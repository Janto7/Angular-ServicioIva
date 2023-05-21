import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorRoutingModule } from './conversor-routing.module';
import { ConversorComponent } from './conversor.component';
import { IvaGeneralComponent } from './iva-general/iva-general.component';
import { IvaReducidoComponent } from './iva-reducido/iva-reducido.component';
import { IvaSuperReducidoComponent } from './iva-super-reducido/iva-super-reducido.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConversorComponent,
    IvaGeneralComponent,
    IvaReducidoComponent,
    IvaSuperReducidoComponent
  ],
  imports: [
    CommonModule,
    ConversorRoutingModule,
    FormsModule
  ]
})
export class ConversorModule { }
