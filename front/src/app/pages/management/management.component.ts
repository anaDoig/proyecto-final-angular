import { JourneyService } from './../../services/journey.service';
import { Component, OnInit } from '@angular/core';
import { IRouteOptions } from 'src/app/models/route-options.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  
  formGroup! : FormGroup;

  newJourney = this.journey.journeyData;

  journeyID = this.journey.journeyData.id;
  
  routeOptions: IRouteOptions = this.journey.journeyOptions;

  ratingValue: number = 0;
  imageValue: string = '';

  constructor(public journey : JourneyService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    
    //Vaciamos el comic nada más arrancar nuestro formulario para asegurarnos de que no se ha quedado nada almacenado
    this.journey.clearJourney();

    this.formGroup = this.formBuilder.group({
      //Le asignamos como valor inicial a cada uno de los campos su campo correspondiente con newComic por si queremos editar algo existente que refleje lo que metemos en comicData
      title: [this.newJourney.title, [Validators.required]],
      description: [this.newJourney.description, [Validators.required]],
      location: [this.newJourney.location, [Validators.required]],
      imgs: ['', [Validators.required]],
      dificulty: [this.newJourney.dificulty, [Validators.required]],
      rating: [this.newJourney.rating, [Validators.required]],
      distance: [this.newJourney.distance, [Validators.required]],
      category: [this.newJourney.category, [Validators.required]],
    })

    //Con esta funcion que tiene un formulario reactivo de Angular podemos capturar en un objeto de golpe el resultado de un formulario a tiempo real:
    this.formGroup.valueChanges.subscribe((changes) => {
      this.newJourney = changes;
      console.log(this.journey.journeyLocal);
    })

  }

  //Definimos la funcion que se ejecutara al subir el formulario
  public onSubmit() {
    if (this.journeyID !== '') {
      //Como es distinto a "" es que hay un comic ya, por lo tanto lo vamos a editar
      console.log(this.journey.journeyLocal);
      // this.journey.editRoutes(Number(this.journeyID), this.newJourney);
      console.log(this.journey.journeyLocal);
    } else {
      //Si es "" es que no existe el comic y lo vamos a postear
      console.log(this.journey.journeyLocal);
      // this.journey.postRoutes(this.newJourney);
      console.log(this.journey.journeyLocal);    
    }
    //Resetar el formulario
    this.formGroup.reset();
    //En cuanto termine de ejecutarse el onsubmit se vaya dinamicamente como si fuera un routerLink a comics otra vez
    this.router.navigate(["/"])
  }

  public delete() {
    this.journey.deleteRoutes(Number(this.journeyID));
    this.journey.journeyLocal.subscribe( data => { console.log(data)});
    this.formGroup.reset();
  }

}
