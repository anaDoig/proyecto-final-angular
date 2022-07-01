import { JourneyService } from './../../services/journey.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor( public journeys: JourneyService) { }

  //Guardar el json en una array de objecto nada más iniciar la app para evitar sobrecribir el json.
  //Se trabajará con la array, almenos durante el desarrollo.
  ngOnInit(): void {     
    // this.journeys.journeyLocal.subscribe(arg => arg = []);  
    console.log('iniciar');
     
    this.journeys.getRoutes().subscribe(
      (data: any) => {
        this.journeys.journeyLocal.subscribe( arg => {
          if(arg.length === 0) {
            arg = Object.assign(arg, data);
          }
        });           
      },
      error => {
        //Log error 
        console.log(error);
      }
    );
  }

  trackItem(index: number, item: any) {
    return item.trackId;
  }

}

