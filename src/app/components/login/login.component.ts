import { Component } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor() {}

  submitForm() {
    const formData = {
      email: this.email,
      senha: this.senha
    };

    const apiUrl = environment.API_LOGIN;
    axios.post(apiUrl, formData)
      .then(response => {
        const nomeAutor = response.data.user.nome;
        const nomeDaObra = response.data.user.nomedaobra;
        const welcomeUrl = `/welcome?nome=${nomeAutor}&nomedaobra=${nomeDaObra}`;
        window.open(welcomeUrl, '_blank'); // Abre a página em uma nova aba
      })
      .catch(error => {
        console.error('Erro ao fazer login:', error);
      });
  }
}
