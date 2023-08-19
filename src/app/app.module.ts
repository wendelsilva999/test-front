import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AutoresComponent } from './components/autores/autores.component';
import { LivrosComponent } from './components/livros/livros.component';
import { TelaComponent } from './components/tela/tela.component';
import { UserComponent } from './components/user/user.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutoresComponent,
    LivrosComponent,
    TelaComponent,
    UserComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
