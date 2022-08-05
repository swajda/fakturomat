import { Component, OnInit } from '@angular/core';
import { Recepit } from '../recepit.model';

@Component({
  selector: 'app-recepits-list',
  templateUrl: './recepits-list.component.html',
  styleUrls: ['./recepits-list.component.css']
})
export class RecepitsListComponent implements OnInit {

  recepits: Recepit[] = [
    new Recepit('Jan Kowalski', 'Adam Nowak', '1F/2022'),
    new Recepit('Jan Kowalski', 'Adam Nowak', '69/2022')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
