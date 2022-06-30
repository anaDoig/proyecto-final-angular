import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnInit {

  @Input() isOpen: boolean=false;
  @Input() selectedJourney: any = {};
  @Output() emitClose = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.isOpen);
  }

  closeModal() {
    this.isOpen = false;
    console.log(this.isOpen);
    this.emitClose.emit(this.isOpen);
  }
}
