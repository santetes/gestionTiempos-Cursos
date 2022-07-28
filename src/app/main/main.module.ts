import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { TablaComponent } from './tabla/tabla.component';
import { MainViewComponent } from './main-view/main-view.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    TablaComponent,
    MainViewComponent,
    FormularioComponent,
    ContadorComponent,
  ],
  imports: [CommonModule, MainRoutingModule, FormsModule],
})
export class MainModule {}
