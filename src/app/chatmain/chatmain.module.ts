import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatmainPageRoutingModule } from './chatmain-routing.module';

import { ChatmainPage } from './chatmain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatmainPageRoutingModule
  ],
  declarations: [ChatmainPage]
})
export class ChatmainPageModule {}
