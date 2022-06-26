import { Component, Input, OnInit } from '@angular/core';
import { IRoute } from 'src/app/models/route.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() journey: any = '';
  constructor() { }

  ngOnInit(): void {
  }

}
