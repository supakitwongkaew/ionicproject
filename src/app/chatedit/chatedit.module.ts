import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChateditPageRoutingModule } from './chatedit-routing.module';

import { ChateditPage } from './chatedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChateditPageRoutingModule
  ],
  declarations: [ChateditPage]
})
export class ChateditPageModule {}
