import { IRoute } from './../models/route.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  //baseUrl from Api
  httpApi: string = 'http://localhost:3000/'

  //Copia del Json se inicializa en app.components.ts para no modificar db.json
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

  constructor(private httpClient: HttpClient) { }

  //Funcion para hacer la petición a la API
  getRoutes() {
    return this.httpClient.get( this.httpApi + "routes")
  }

  //Funcion para postear un nuevo journey
  postRoutes(newJourney: IRoute) {
    const lastId = this.journeyLocal[this.journeyLocal.length -1].id;
    newJourney.id = lastId + 1;
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
