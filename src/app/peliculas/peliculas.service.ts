import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

private apiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=887bb1b3e75ef6082bdc10a92d81df4b";
private peliculas: Pelicula[] = [];
  

  getPeliculas():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  constructor(private http:HttpClient) {
    
   }

}
