import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatmainPage } from './chatmain.page';

const routes: Routes = [
  {
    path: '',
    component: ChatmainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatmainPageRoutingModule {}
