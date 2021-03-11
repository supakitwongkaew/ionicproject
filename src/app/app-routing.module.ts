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
    path: 'chatpage',
    loadChildren: () => import('./chatpage/chatpage.module').then( m => m.ChatpagePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToChat),
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
