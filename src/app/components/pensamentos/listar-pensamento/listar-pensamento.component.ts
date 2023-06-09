import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    // {
    // conteudo: 'Passo informaçoes para o componente filho',
    // modelo: 'modelo3',
    // autoria: 'Componente Pai'
    // },
    // {
    //   conteudo: 'Comunicação entre documentos',
    //   modelo: 'modelo2',
    //   autoria: 'Gustavo'
    // },
    // {
    //   conteudo: 'Minha propriedade é decorada com @Input',
    //   modelo: 'modelo1',
    //   autoria: 'Componente Filho'
    // }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
