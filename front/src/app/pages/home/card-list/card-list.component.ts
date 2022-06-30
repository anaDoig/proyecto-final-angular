import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRoute } from 'src/app/models/route.interface';
import { JourneyService } from 'src/app/services/journey.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() journey: any = '';
  @Output() emitOpen = new EventEmitter();

  isOpen: boolean = false;

  constructor(private router: Router, private journeyService: JourneyService) { }

  ngOnInit(): void {
  }

  getSelectedJourneyDispatcher(selectedJourney: any) {
    this.journeyService.getSelectedData(selectedJourney);
    this.isOpen = true;
    this.emitOpen.emit(this.isOpen);
  }
  
  catchJourney(journey: any) {
    this.journeyService.editItem(journey);
    this.router.navigate(["/management"]);
  }
}
