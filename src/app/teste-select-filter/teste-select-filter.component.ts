import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-select-filter',
  templateUrl: './teste-select-filter.component.html',
  styleUrls: ['./teste-select-filter.component.css'],
})
export class TesteSelectFilterComponent implements OnInit {
  estados: any[] = [];
  selectedEstado: number;

  constructor() {}

  ngOnInit(): void {
    this.carregaEstados();
  }

  carregaEstados() {
    this.estados = [
      { id: 1, nome: 'Rio de Janeiro' },
      { id: 2, nome: 'Rio Grande do Sul' },
      { id: 3, nome: 'Pernambuco' },
      { id: 4, nome: 'Rio Grande do Norte' },
      { id: 5, nome: 'Ceará' },
      { id: 6, nome: 'Bahia' },
      { id: 7, nome: 'Minas Gerais' },
      { id: 8, nome: 'Mato Grosso do Sul' },
      { id: 9, nome: 'São Paulo' },
      { id: 10, nome: 'Sergipe' },
      { id: 11, nome: 'Paraíba' },
      { id: 12, nome: 'Alagoas' },
      { id: 13, nome: 'Piauí' },
    ];
  }
}
