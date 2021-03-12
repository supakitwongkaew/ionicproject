import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChateditPage } from './chatedit.page';

const routes: Routes = [
  {
    path: '',
    component: ChateditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChateditPageRoutingModule {}
