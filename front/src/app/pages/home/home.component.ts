import { JourneyService } from './../../services/journey.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public journeys: JourneyService) { }

  //Guardar el json en una array de objecto nada más iniciar la app para evitar sobrecribir el json.
  //Se trabajará con la array, almenos durante el desarrollo.
  ngOnInit(): void {        
    this.journeys.getRoutes().subscribe(
      (data: any) => {
        // Handle result
        this.journeys.journeyLocal = data;              
      },
      error => {
        //Log error 
        console.log(error);
      }
    );
  }

}

