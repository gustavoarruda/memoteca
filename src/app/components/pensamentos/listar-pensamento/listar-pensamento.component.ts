import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      modelo: 'modelo2',
      autoria: 'Gustavo'
    },
    {
      conteudo: 'Passo informaçoes para o componente filho',
      modelo: 'modelo3',
      autoria: 'Componente Pai'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input',
      modelo: 'modelo1',
      autoria: 'Componente Filho'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
