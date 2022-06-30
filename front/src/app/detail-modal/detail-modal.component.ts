import { Component, OnInit } from '@angular/core';
import { JourneyService } from '../services/journey.service';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnInit {

  public show = false;

  constructor(private journeyService: JourneyService) { }

  ngOnInit(): void {
  }

  getData() {
    //console.log(this.journeyService.getSelectedData(item).subscribe());
  }

  showModal() {
    this.show = true;
  }

  hideModal() {
    this.show = false;
  }

}
