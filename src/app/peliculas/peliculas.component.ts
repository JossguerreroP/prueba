import { Component ,OnInit} from '@angular/core';
import { PeliculasService } from './peliculas.service';
//import { Pelicula } from '../models/pelicula';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit{

  peliculas: any;

  ngOnInit(): void {
    this.peliculasService.getPeliculas().subscribe(
      res => {
        this.peliculas = res.results;
        console.log(this.peliculas)
      });
   }

  

   constructor(private peliculasService:PeliculasService){}

}
