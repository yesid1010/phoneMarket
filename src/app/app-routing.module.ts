import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // }

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './compenents/login/login.module#LoginPageModule',canActivate:[NologinGuard] },
  { path: 'register', loadChildren: './compenents/register/register.module#RegisterPageModule',canActivate:[NologinGuard]},
  { path: 'home/:id',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),canActivate:[AuthGuard]}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
