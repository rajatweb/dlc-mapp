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
    loadChildren: () => import('./pages/passcode/passcode.module').then(m => m.PasscodePageModule)
  },
  {
    path: 'homeowner',
    loadChildren: () => import('./component/homeowner/homeowner.module').then(m => m.HomeownerPageModule)
  },
  {
    path: 'notice',
    loadChildren: () => import('./shared/notice/notice.module').then(m => m.NoticePageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./shared/modal/modal.module').then(m => m.ModalPageModule)
  },
  {
    path: 'project-schedule',
    loadChildren: () => import('./shared/project-schedule/project-schedule.module').then(m => m.ProjectSchedulePageModule)
  },
  {
    path: 'project-team-contact',
    loadChildren: () => import('./shared/project-team-contact/project-team-contact.module').then(m => m.ProjectTeamContactPageModule)
  },
  {
    path: 'boardmember',
    loadChildren: () => import('./component/boardmember/boardmember.module').then(m => m.BoardmemberPageModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./component/manager/manager.module').then(m => m.ManagerPageModule)
  },
  {
    path: 'contractor',
    loadChildren: () => import('./component/contractor/contractor.module').then(m => m.ContractorPageModule)
  },
  {
    path: 'project-weekly-update',
    loadChildren: () => import('./shared/project-weekly-update/project-weekly-update.module').then(m => m.ProjectWeeklyUpdatePageModule)
  },
  {
    path: 'project-monthly-update',
    loadChildren: () => import('./shared/project-monthly-update/project-monthly-update.module').then(m => m.ProjectMonthlyUpdatePageModule)
  },
  {
    path: 'change-order',
    loadChildren: () => import('./shared/change-order/change-order.module').then(m => m.ChangeOrderPageModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('./shared/invoices/invoices.module').then(m => m.InvoicesPageModule)
  },
  {
    path: 'specification',
    loadChildren: () => import('./shared/specification/specification.module').then( m => m.SpecificationPageModule)
  },
  {
    path: 'addendums',
    loadChildren: () => import('./shared/addendums/addendums.module').then( m => m.AddendumsPageModule)
  },
  {
    path: 'rfi',
    loadChildren: () => import('./shared/rfi/rfi.module').then( m => m.RfiPageModule)
  },
  {
    path: 'asbuilts',
    loadChildren: () => import('./shared/asbuilts/asbuilts.module').then( m => m.AsbuiltsPageModule)
  },
  {
    path: 'punchlist',
    loadChildren: () => import('./shared/punchlist/punchlist.module').then( m => m.PunchlistPageModule)
  },
  {
    path: 'project-photos',
    loadChildren: () => import('./shared/project-photos/project-photos.module').then( m => m.ProjectPhotosPageModule)
  },
  {
    path: 'request-change',
    loadChildren: () => import('./shared/request-change/request-change.module').then( m => m.RequestChangePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
