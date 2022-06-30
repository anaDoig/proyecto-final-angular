import { JourneyService } from './../../services/journey.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  isOpen: boolean = false;
  selectedJourney: any = {};
  constructor( public journeys: JourneyService) { }

  //Guardar el json en una array de objecto nada más iniciar la app para evitar sobrecribir el json.
  //Se trabajará con la array, almenos durante el desarrollo.
  ngOnInit(): void {       
    console.log('iniciar');
     
    this.journeys.getRoutes().subscribe(
      (data: any) => {
        // Handle result
        if(this.journeys.journeyLocal.length === 0) {
          this.journeys.journeyLocal = data;
        }              
      },
      error => {
        //Log error 
        console.log(error);
      }
    );
  }

  setOpen(open: boolean): void {
    this.isOpen = open;
    console.log(this.isOpen);
    console.log(this.journeys.selectedJourney);
    this.selectedJourney = this.journeys.selectedJourney;
    console.log(this.selectedJourney);
    
  }

  closeModal(open: boolean): void {
    this.isOpen = open;
    console.log(this.isOpen);
  }
  
  trackItem(index: number, item: any) {
    return item.trackId;
  }

}

