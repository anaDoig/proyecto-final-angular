import { Component } from '@angular/core';
import { JourneyService } from './services/journey.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';

  constructor( private journey: JourneyService) { }

  //Guardar el json en una array de objecto nada más iniciar la app para evitar sobrecribir el json.
  //Se trabajará con la array, almenos durante el desarrollo.
  ngOnInit(): void {     
    this.journey.getRoutes().subscribe(
      (data: any) => {
        // Handle result
        this.journey.journeyLocal  = data;
        console.log(this.journey.journeyLocal);
      },
      error => {
        //Log error 
        console.log(error);
      }
    );
  }
}

