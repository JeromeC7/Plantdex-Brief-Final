import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from '../models/plant';
interface apiresponse<T> {
  status: string;
  data: T;
}

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  constructor(private http: HttpClient) {}

  // la methode getPlants retourne une requête http de type GET
  // (on veut recup des données) dont les données serront de type Plant[]
  // (tableau d'objets de type Plant) à partir de l'url "http://localhost:3000/plants"

  getPlants(): Observable<apiresponse<Plant[]>> {
    return this.http.get<apiresponse<Plant[]>>(
      'http://localhost:3000/api/plantes'
    );
  }

  getPlantbyId(id: number): Observable<apiresponse<Plant>> {
    return this.http.get<apiresponse<Plant>>(
      `http://localhost:3000/api/plantes/${id}`
    );
  }

  deletePlante(id: number): Observable<apiresponse<Plant>> {
    const token = localStorage.getItem('token');
    return this.http.delete<apiresponse<Plant>>(
      `http://localhost:3000/api/plantes/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  updatePlante(id: number, updatedPlante: string) {
    const token = localStorage.getItem('token');
    return this.http.put(
      `http://localhost:3000/api/plantes/${id}`,
      updatedPlante,
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  createPlante(createPlante: string) {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }
    return (
      this.http.post(`http://localhost:3000/api/plantes`, createPlante, httpOptions)
      
    );
  }
}
