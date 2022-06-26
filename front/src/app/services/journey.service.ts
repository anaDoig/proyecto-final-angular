import { IRoute } from './../models/route.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reduce } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  constructor(private httpClient: HttpClient) { }
  //Copia del Json se inicializa en app.components.ts
  journeyLocal!: IRoute[];

  journeyData: IRoute = {
    title: '',
    description: '',
    location: '',
    imgs: [],
    dificulty: '',
    rating: 0,
    distance: 0,
    category: '',
    id: 0
  }

  //Funcion para hacer la petición a la API
  getRoutes() {
    return this.httpClient.get("http://localhost:3000/routes")
  }

  //Funcion para postear un nuevo journey
  postRoutes(newJourney: IRoute) {
    this.journeyLocal.push(newJourney);
  }
  //Funcion para borrar un journey
  deleteRoutes(journeyID: number) {
    const journeyIndex = this.journeyLocal.findIndex( journey => journey.id === journeyID);
    this.journeyLocal.splice(journeyIndex, 1);
  }
  //Funcion para editar un journey
  editRoutes(journeyID: number, editedJourney: IRoute) {
    const journeyIndex = this.journeyLocal.findIndex( journey => journey.id === journeyID);
    this.journeyLocal[journeyIndex] = editedJourney;
  }
}
