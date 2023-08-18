import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AutoresComponent } from './components/autores/autores.component';
import { LivrosComponent } from './components/livros/livros.component';
import { TelaComponent } from './components/tela/tela.component';
import { UserComponent } from './components/user/user.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'autores', component: AutoresComponent },
  { path: 'livros', component: LivrosComponent },
  { path: 'user', component: UserComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', component: TelaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
