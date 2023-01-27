import { Component, OnInit } from '@angular/core';
import { Jugador } from './../_interfaces/jugador.interface';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  nombre: string = 'Felinos';
  estatus: boolean = false;
  // jugador: string = 'Carlos';

  jugador: Jugador = {
    nombre: 'Sergio',
    edad: 35,
    apodo: 'Felino',
    foto: 'imagen.jpg',
    posicion: 'Delantero',
    estado: false
  }


  constructor() { }

  ngOnInit() {
    this.nombre = 'Piratas';
  }

  agregarJugador() {
    let jugador = 'Sergio';
    jugador = 'Iván';

    this.jugador.nombre = jugador;
  }

  actualizarEstado(event) {
    this.jugador.estado = event;
    // this.estatus = event;
  }

}
