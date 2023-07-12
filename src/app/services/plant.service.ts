import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from '../models/plant';


@Injectable({
  providedIn: 'root'
})
export class PlantService {
  constructor(private http: HttpClient) {}

  // la methode getPlants retourne une requête http de type GET 
  // (on veut recup des données) dont les données serront de type Plant[] 
  // (tableau d'objets de type Plant) à partir de l'url "http://localhost:3000/plants"

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>("http://localhost:3000/plants");
  }
}
