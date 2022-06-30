import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRouteOptions } from '../models/route-options.interface';
import { IRoute } from './../models/route.interface';


@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  //baseUrl from Api
  httpApi: string = 'http://localhost:3000/'

  //Copia del Json se inicializa en app.components.ts para no modificar db.json
  journeyLocal: IRoute[] = [];

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
  };

  selectedJourney: IRoute = {
    title: '',
    description: '',
    location: '',
    imgs: [],
    dificulty: '',
    rating: 0,
    distance: 0,
    category: '',
    id: 0
  };

  journeyOptions: any = {
    dificulty: [
      { name: 'Seleccionar dificultad', selectable: true },
      { name: 'baja', selectable:false },
      { name: 'media', selectable:false },
      { name: 'alta', selectable:false },
    ],
    category: [
      { name: 'Seleccionar categoria', selectable: true },
      { name: 'A pie', selectable:false },
      { name: 'A caballo', selectable:false },
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
    const lastId = this.journeyLocal[this.journeyLocal.length -1].id;
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

  //Función para obtener los datos de la ruta clickada
  getSelectedData(item: any) {
    this.selectedJourney = item;
    return this.selectedJourney;
  }

  dispatchSelectedJourney() {
    return this.getSelectedData;
  }
}

