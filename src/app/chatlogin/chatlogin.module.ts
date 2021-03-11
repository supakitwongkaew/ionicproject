import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatloginPageRoutingModule } from './chatlogin-routing.module';

import { ChatloginPage } from './chatlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatloginPageRoutingModule
  ],
  declarations: [ChatloginPage]
})
export class ChatloginPageModule {}
