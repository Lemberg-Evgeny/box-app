import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';

// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
// // import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
// import { BoardUserComponent } from './board-user/board-user.component';
// import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
// import { BoardAdminComponent } from './board-admin/board-admin.component';
// import { DashViewComponent } from './dash-view/dash-view.component';
// import { GableControlComponent } from './gable-control/gable-control.component';

// import { authInterceptorProviders } from './_helpers/auth.interceptor';

// import { RoleGuard }   from './_helpers/role.guard';


const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'user', component: BoardUserComponent },
  // { path: 'mod', component: BoardModeratorComponent, canActivate:[RoleGuard] },
  // // { path: 'admin', component: BoardAdminComponent, canActivate:[authInterceptorProviders] },
  // { path: 'admin', component: BoardAdminComponent, canActivate:[RoleGuard] },
  // { path: 'dashboard', component: DashViewComponent },
  // { path: 'dashboard/:gableId', component: GableControlComponent },
  // // { path: '', redirectTo: 'home', pathMatch: 'full' }
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login' }
  // { path: 'test', redirectTo: '/test' }
  { path: '', component: AppComponent },
  { path: 'test', component: BoxComponent },
  // { path: '**', component: NotFoundComponent },
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
