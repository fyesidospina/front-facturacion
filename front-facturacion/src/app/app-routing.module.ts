import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent, CreateClientFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { ProductosComponent } from './pages/productos/productos.component';
import { CreateProductFormComponent } from './shared/components/create-product-form/create-product-form.component';
import { InventariosComponent } from './pages/inventarios/inventarios.component';

const routes: Routes = [
  {
    path: 'reportes',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'clientes',
    component: ClientesComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'productos',
    component: ProductosComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'inventarios',
    component: InventariosComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-client-form',
    component: CreateClientFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-product-form',
    component: CreateProductFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    ClientesComponent,
    ProductosComponent,
    InventariosComponent
  ]
})
export class AppRoutingModule { }
