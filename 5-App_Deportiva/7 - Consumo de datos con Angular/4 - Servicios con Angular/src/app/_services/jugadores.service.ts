import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Jugador } from './../_interfaces/jugador.interface'

@Injectable()
export class JugadoresService {

  nombre = 'Roswell';

  constructor(private http: HttpClient) { }



  obtener() {
    return this.http.get('https://api-mi-liga.now.sh/api/jugadores')
  }

}
