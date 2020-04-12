import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'passcode',
    loadChildren: () => import('./pages/passcode/passcode.module').then( m => m.PasscodePageModule)
  },
  {
    path: 'homeowner',
    loadChildren: () => import('./component/homeowner/homeowner.module').then( m => m.HomeownerPageModule)
  },
  {
    path: 'notice',
    loadChildren: () => import('./shared/notice/notice.module').then( m => m.NoticePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
