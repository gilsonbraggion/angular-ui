import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  textoEvento = '';
  textoCapturado = '';
  textoValidacao = '';
  propriedadeTwoWay = '';

  listaNomes = [
    {texto: 'Gilson1'},
    {texto: 'Gilson2'},
    {texto: 'Gilson3'},
    {texto: 'Gilson4'},
    {texto: 'Gilson5'},
    {texto: 'Gilson6'}
    ];

  exibir = false;

  constructor() { }

  ngOnInit(): void {
  }

  alteraNome(event: any) {
    this.textoEvento = event.target.value;
  }

  capturarValor(texto: any) {
    this.textoCapturado = texto;
  }

  validaTexto(event: any) {
    this.textoValidacao = event.target.value;
  }

  exibirTextoNgIf() {
    this.exibir = !this.exibir;
  }

  ocultarTextoNgIf() {
    this.exibir = !this.exibir;
  }

}
