import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment/environment';
@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  autores: any[] = [];

  constructor() {}

  ngOnInit() {
    this.fetchAutores();
  }

  fetchAutores() {
    const apiUrl = environment.API_URL;
    axios.get(apiUrl)
      .then(response => {
        this.autores = response.data.map((autor: any) => {
          return {
            nome: autor.nome,
            nomeObra: autor.nomedaobra
          };
        });
      })
      .catch(error => {
        console.error('Erro ao buscar autores:', error);
      });
  }
}
