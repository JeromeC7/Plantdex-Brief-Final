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
  allPlants!: Plant[];
  plantsToDisplay!: Plant[];
  categories!: string[];

  constructor(private instancePlantService: PlantService) {}

  ngOnInit() {
    this.instancePlantService.getPlants().subscribe((response) => {
      this.plantsToDisplay = response.data;
      this.allPlants = [...this.plantsToDisplay];
      this.categories = [
        ...new Set(this.plantsToDisplay.map((plant) => plant.categorie)),
      ];
      console.log(response.data);
    });
  }

  ecouteDeLenfant(categoryDeLenfant: string[]) {
    console.log('categoryDeLenfant', categoryDeLenfant);

    this.plantsToDisplay = this.allPlants.filter((plant) =>
      categoryDeLenfant.includes(plant.categorie)
    );
  }
  onSearchDesParents(e: Event) {
    const onSearchDesParentsElement = e.target as HTMLInputElement;
    this.plantsToDisplay = this.allPlants.filter((plant) => {
      if (
        plant.nom
          .toLowerCase()
          .includes(onSearchDesParentsElement.value.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
  }
  triMoiCaStp(e: Event) {
    const triMoiCaStpElement = e.target as HTMLInputElement;
    console.log(triMoiCaStpElement.value);
    let test: string = triMoiCaStpElement.value;
    if (test === 'nom') {
      this.plantsToDisplay.sort((plantA, plantB) => {
        if (plantA['nom'] < plantB['nom']) {
          return -1;
        }
        if (plantA['nom'] > plantB['nom']) {
          return 1;
        }
        return 0;
      });
    }
    else if(test === "soleil") {
      this.plantsToDisplay.sort((plantA, plantB) => {
        if (plantA['soleil'] < plantB['soleil']) {
          return -1;
        }
        if (plantA['soleil'] > plantB['soleil']) {
          return 1;
        }
        return 0;
      });
    }
else if(test === "arrosage"){
 this.plantsToDisplay.sort((plantA, plantB) => plantA['arrosage'] - plantB['arrosage']) }
  
  }

  onClick() {
    this.plantsToDisplay = [];
  }
}
