import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './authguard/auth.guard';
import { AuthModule } from './auth/auth.module';
import { ApplicationModule } from './application/application.module';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: 'application',
    canActivate:[AuthGuard],
    loadChildren: () => ApplicationModule
  },
  { path: '**', redirectTo: 'auth' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}


