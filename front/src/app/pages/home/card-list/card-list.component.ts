import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
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

  constructor(private journeyService: JourneyService) { }

  ngOnInit(): void {
  }

  getSelectedJourneyDispatcher(selectedJourney: any) {
    console.log("click");
    this.journeyService.getSelectedData(selectedJourney);
    this.isOpen = true;
    this.emitOpen.emit(this.isOpen);
    console.log(this.isOpen);
  }
  
}
