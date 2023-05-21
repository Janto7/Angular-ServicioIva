import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorComponent } from './conversor.component';
import { IvaGeneralComponent } from './iva-general/iva-general.component';
import { IvaReducidoComponent } from './iva-reducido/iva-reducido.component';
import { IvaSuperReducidoComponent } from './iva-super-reducido/iva-super-reducido.component';

const routes: Routes = [
  { path: '', component: ConversorComponent },
  { path: 'iva-general', component: IvaGeneralComponent },
  { path: 'iva-reducido', component: IvaReducidoComponent },
  { path: 'iva-super-reducido', component: IvaSuperReducidoComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversorRoutingModule { }
