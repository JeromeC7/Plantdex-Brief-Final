import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
})
export class PlantComponent {
  unePlanteAAfficher!: Plant; // Utilisez le type approprié pour votre modèle de données

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

  deletePlante(id: number) {
    this.planteService.deletePlante(id).subscribe((response) => {
      // Redirigez vers la page souhaitée après la suppression (par exemple, la liste des plantes)
      console.log('la plante a été supprimé');
    });
    this.router.navigate(['/home']);
  }

  
}

