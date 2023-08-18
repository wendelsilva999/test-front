import { Component } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  nome: string = '';
  pseudonimo: string = '';
  email: string = '';
  nomedaobra: string = '';
  senha: string = '';

  registroRealizado: Boolean = false;

  constructor() {}

  submitForm() {
    const formData = {
      nome: this.nome,
      pseudonimo: this.pseudonimo,
      email: this.email,
      nomedaobra: this.nomedaobra,
      senha: this.senha
    };

    const apiUrl = environment.API_URL;
    axios.post(apiUrl, formData)
      .then(response => {
        console.log('Cadastro enviado com sucesso:', response.data);
        this.clearForm();
        this.registroRealizado = true;
      })
      .catch(error => {
        console.error('Erro ao enviar cadastro:', error);
      });
  }

  clearForm() {
    this.nome = '';
    this.pseudonimo = '';
    this.email = '';
    this.nomedaobra = '';
    this.senha = '';
  }
}
