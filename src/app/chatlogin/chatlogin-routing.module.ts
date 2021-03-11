import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatloginPage } from './chatlogin.page';

const routes: Routes = [
  {
    path: '',
    component: ChatloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatloginPageRoutingModule {}
