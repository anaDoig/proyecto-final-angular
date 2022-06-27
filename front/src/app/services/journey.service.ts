import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRouteOptions } from '../models/route-options.interface';
import { IRoute } from './../models/route.interface';


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
    id: ''
  }

  journeyOptions: IRouteOptions = {
    dificulty: [
      'baja',
      'media',
      'alta',
    ],
    category: [
      'A pie',
      'A caballo',
    ],
  }

  constructor(private httpClient: HttpClient) { }

  //Funcion para setear a vacio el comic de nuevo
  clearJourney() {
    this.journeyData = {
      title: '',
      description: '',
      location: '',
      imgs: [],
      dificulty: '',
      rating: 0,
      distance: 0,
      category: '',
      id: ''
    }
  }

  //Setear con X comic el comicData
  editItem(item: any) {
    this.journeyData = item;
  }

  //Funcion para hacer la petición a la API
  getRoutes() {
    return this.httpClient.get(this.httpApi + "routes");
  }

  //Funcion para postear un nuevo journey
  postRoutes(newJourney: IRoute) {
    console.log(this.journeyLocal.length);
    const lastId = this.journeyLocal[this.journeyLocal.length -1].id;
    console.log(lastId);
    newJourney.id = Number(lastId) + 1;
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

