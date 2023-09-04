import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plante-update',
  templateUrl: './plante-update.component.html',
  styleUrls: ['./plante-update.component.css'],
})
export class PlanteUpdateComponent {
  unePlanteAAfficher!: Plant; // Utilisez le type approprié pour votre modèle de données
  nouveauNom!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private planteService: PlantService
  ) {}

  ngOnInit() {
    const planteId = this.activatedRoute.snapshot.params['id'];
    this.planteService.getPlantbyId(planteId).subscribe((response) => {
      this.unePlanteAAfficher = response.data;
    });
  }

  // Méthode pour mettre à jour une plante
  updatedPlante(id: number, nom: string) {
    nom = this.nouveauNom;
    console.log(`le console log de updatePlante : id= ${id} et le nom= ${nom}`);
    const updatedPlante: Plant = { ...this.unePlanteAAfficher }; // Copiez la plante existante
    console.log('la plante updaté' + updatedPlante.nom);

    // Mettez à jour les propriétés nécessaires de la plante
    updatedPlante.nom = nom;
    console.log(updatedPlante.nom);

    // Remplacez par la nouvelle valeur

    this.planteService
      .updatePlante(id, updatedPlante.nom)
      .subscribe((response) => {
        console.log(response);

        // Redirigez vers la page de la plante mise à jour
      });
    this.router.navigate(['/plant', id]); // ramène à la page d avant
  }
}
