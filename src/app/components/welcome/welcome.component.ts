import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  nome: string = '';
  obras: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Captura os parâmetros da URL
    this.route.queryParams.subscribe(params => {
      this.nome = params['nome'];
      this.obras = params['nomedaobra'].split(','); // Se estiverem separadas por vírgula
    });
  }
}
