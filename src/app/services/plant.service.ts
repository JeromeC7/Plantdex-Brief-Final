import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';
interface apiresponse {status:string, data: Plant[]};

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  axios: any;
  constructor(private http: HttpClient) {}

  /**
   * La méthode getPlants retourne
   * une requête http de type GET (on veut récupérer de données)
   * dont les données seront de type Plant[] (tableau d'objets de type Plant)
   * à partir de l'URL "http://localhost:3000/plants"
   *
   */

  getPlants(): Observable<apiresponse> {
    return this.http.get<apiresponse>('http://localhost:3000/api/plantes');
    //return this.http.get<Plant[]>('http://localhost:3000/plants');
    //const response = await axios.get('https://votre-api.com/api/endpoint');
    //return await this.axios.get<Plant[]>('http://localhost:3000/api/plantes');
  }


}

