import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/']);

const redirectLoggedInToChat = () => redirectLoggedInTo(['/chat']);

const routes: Routes = [
  {
    path: 'chatlogin',
    loadChildren: () => import('./chatlogin/chatlogin.module').then( m => m.ChatloginPageModule)
  },
  {
    path: 'chatmain/:obj',
    loadChildren: () => import('./chatmain/chatmain.module').then( m => m.ChatmainPageModule)
  },
  {
    path: 'chatpage/:obj',
    loadChildren: () => import('./chatpage/chatpage.module').then( m => m.ChatpagePageModule)
  },
  {
    path: 'chatedit/:obj2',
    loadChildren: () => import('./chatedit/chatedit.module').then( m => m.ChateditPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
