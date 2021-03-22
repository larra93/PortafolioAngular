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

  descargarPdf(){
    window.open("./assets/pdf/Felipe Larraguibel-Ingeniero en Informática.pdf", "_blank");
  }
}
