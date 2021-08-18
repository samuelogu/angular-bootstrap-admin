import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  year:number = 2021;
  date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.year = this.date.getFullYear();
  }

}
