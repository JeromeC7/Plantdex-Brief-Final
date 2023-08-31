import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';
interface apiresponse<T> {status:string, data: T};

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private http: HttpClient) {}

  /**
   * La méthode getPlants retourne
   * une requête http de type GET (on veut récupérer de données)
   * dont les données seront de type Plant[] (tableau d'objets de type Plant)
   * à partir de l'URL "http://localhost:3000/plants"
   *
   */

  getPlants(): Observable<apiresponse<Plant[]>> {
    return this.http.get<apiresponse<Plant[]>>('http://localhost:3000/api/plantes');
    //return this.http.get<Plant[]>('http://localhost:3000/plants');
    //const response = await axios.get('https://votre-api.com/api/endpoint');
    //return await this.axios.get<Plant[]>('http://localhost:3000/api/plantes');
  }

  getPlantbyId(id:number): Observable<apiresponse<Plant>> {
    return this.http.get<apiresponse<Plant>>(`http://localhost:3000/api/plantes/${id}`);
    //return this.http.get<Plant[]>('http://localhost:3000/plants');
    //const response = await axios.get('https://votre-api.com/api/endpoint');
    //return await this.axios.get<Plant[]>('http://localhost:3000/api/plantes');
  }

  deletePlant(id:number){
    return this.http.delete<apiresponse<Plant>>(`http://localhost:3000/api/plantes/${id}`);
  }

  updatePlant(id:number, updated:string){
    const dataUpdated = {"nom": updated};
    return this.http.put<apiresponse<Plant>>(`http://localhost:3000/api/plantes/${id}`,dataUpdated);
  }

  createPlant(plant: Plant){
    return this.http.post<apiresponse<Plant>>(`http://localhost:3000/api/plantes`,plant);
  }

}

