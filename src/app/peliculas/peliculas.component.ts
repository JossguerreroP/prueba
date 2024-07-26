import { Component ,OnInit} from '@angular/core';
import { PeliculasService } from './peliculas.service';
import { ColDef } from 'ag-grid-community';
import { Pelicula } from '../models/pelicula';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit{
  rowData :Pelicula[]=[];

  colDefs: ColDef[] = [
    { field: "Titulo",
      wrapText: true,  
      tooltipField: 'Titulo' ,
    },
    { field: "Idioma" },
    {
      field: "poster_path",
      // Use a cell renderer function to display images
      cellRenderer: (poster_path: any) => {
       // console.log(poster_path.value)
        if (!poster_path.value) {
          return `<div>No Image Available</div>`;
        } else
        console.log('https://image.tmdb.org/t/p'+poster_path.value)
        return `<div>
      <img src="https://image.tmdb.org/t/p/original${poster_path.value}" alt="Imagen" style="width:120px; height: 120px;"/>
    </div>`
    }
    },
    {
      field: "Overview",
      wrapText: true, 
      autoHeight: true, 
      tooltipField: 'Overview' ,
      cellClass: 'justify-text',
      width: 450,
    },
    { field: "fecha" }
  ];
  
  peliculas: any;
  filterText: string = '';

  ngOnInit(): void {
    this.initialize();
   }

   initialize():void{
    this.peliculasService.getPeliculas().subscribe(
      res => {
        this.peliculas = res.results;
        console.log( this.peliculas);
        this.setRow(this.peliculas);
      });
   }
  
  
   setRow(datos: any): void {
    const newRows: Pelicula[] = [];  
    for (let i = 0; i < datos.length; i++) {
        let pelicula: Pelicula = {
            Titulo: datos[i].title,
            Idioma: datos[i].original_language,
            Overview: datos[i].overview,
            poster_path: datos[i].poster_path,
            fecha: datos[i].release_date
        };
        newRows.push(pelicula);
    }
    this.rowData = newRows;  
    console.log(this.rowData);
}


   constructor(private peliculasService:PeliculasService ){}

}
