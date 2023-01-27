import { Component, OnInit } from '@angular/core';

import { Jugador } from './../_interfaces/jugador.interface';
import { Equipo } from './../_interfaces/equipo.interface';

import * as JUGADORES from './../../assets/data/jugadores.json';
import * as EQUIPOS from './../../assets/data/equipos.json';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  nombre: string = 'Felinos';
  estatus: boolean = false;
  // jugador: string = 'Carlos';

  jugadores: Jugador[];
  equipos: Equipo[];

  jugador: Jugador = {
    nombre: 'Sergio',
    edad: 35,
    apodo: 'Felino',
    foto: 'imagen.jpg',
    posicion: 'Delantero',
    estado: false
  }

  step = 0;

  colorActivo = 'blue';
  colorInactivo = 'red';

  presupuesto = 18000000;
  actualizacion = new Date();

  constructor() { }

  ngOnInit() {
    this.nombre = 'Piratas';

    this.jugadores = JUGADORES as any;
    this.equipos = EQUIPOS as any;
  }

  agregarJugador() {
    let jugador = 'Sergio';
    jugador = 'Iván';

    this.jugador.nombre = jugador;
  }

  actualizarEstado(jugador: Jugador, i: number, event) {
    jugador.estado = event;
    this.step = i;
    //this.jugador.estado = event;
    // this.estatus = event;
  }

  activarJugador(jugador: Jugador) {
    jugador.estado = true;
  }

  mostrarDatos(i: number) {
    this.step = i;
  }

  obtenerColor(estado: boolean) {
    let color = 'green';
    if (estado) {
      color = 'blue';
    } else {
      color = 'red';
    }

    return color;
  }
}
