import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  @Input() formGroup! : any;
  @Input() name! : any;

  constructor() { }

  ngOnInit(): void {
  }

}
