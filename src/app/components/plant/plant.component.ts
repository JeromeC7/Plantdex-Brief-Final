import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from 'src/app/services/plant.service';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent {
  constructor(private instancePlantService: PlantService, private activatedRoute:ActivatedRoute, private router:Router) {
  }
  unePlanteAAfficher!: Plant;
  
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.instancePlantService.getPlantbyId(id).subscribe((response) => {
      console.log(response.data); 
      this.unePlanteAAfficher = response.data;
    });
  }

  delete(id:number){
    this.instancePlantService.deletePlant(id).subscribe((response) => {
      console.log("La plante a été supprimée.");
    });
    this.router.navigate(['/home']);
  }
}
