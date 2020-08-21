import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  buscarHeroe( termino: string){
    console.log('Pasando por Navbar ¿o no?');
    console.log(termino);
    this.router.navigate( ['/buscar', termino] );
  }

}
