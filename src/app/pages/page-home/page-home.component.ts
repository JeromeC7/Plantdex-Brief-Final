import { Component, OnInit, Output } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {
  [x: string]: any;
  //plante a afficher dans la page
  plantsToDisplay!: Plant[];

  constructor(private instancePlantService: PlantService) {}

  ngOnInit() {
    this.instancePlantService.getPlants().subscribe((data) => {
      this.plantsToDisplay = data;
      console.log(data);
    });
  }
}
