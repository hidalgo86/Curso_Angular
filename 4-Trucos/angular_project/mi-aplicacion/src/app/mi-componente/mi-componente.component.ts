import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css'],
})
export class MiComponenteComponent implements OnInit {
  public valorA: string;
  public valorB: string;

  constructor() {}

  ngOnInit() {
    this.valorA = 'prueba';
    this.valorB = 'segunda prueba';
  }
}
