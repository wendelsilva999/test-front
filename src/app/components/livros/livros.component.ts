import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  livros: any[] = [];

  constructor() {}

  ngOnInit() {
    this.fetchLivros();
  }

  fetchLivros() {
    const apiUrl = environment.API_URL;
    axios.get(apiUrl)
      .then(response => {
        this.livros = response.data.map((livro: any) => {
          return {
            nomeObra: livro.nomedaobra
          };
        });
      })
      .catch(error => {
        console.error('Erro ao buscar livros:', error);
      });
  }
}
