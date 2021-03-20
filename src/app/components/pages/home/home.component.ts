import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre: string = 'Felipe Larraguibel';
  cargo: string = 'Desarrollador Web';
  constructor() { }

  ngOnInit(): void {
  }

}
