import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-create-plant',
  templateUrl: './create-plant.component.html',
  styleUrls: ['./create-plant.component.css'],
})
export class CreatePlantComponent implements OnInit {
  createPlante!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private plantService: PlantService,
    private router: Router // private formGroupe: FormGroup
  ) {}

  ngOnInit(): void {
    this.createPlante = this.formBuilder.group({
      id: ['', Validators.required],
      nom: ['', Validators.required],
      soleil: ['', Validators.required],
      arrosage: ['', Validators.required],
      categorie: ['', Validators.required],
      Image: [''],
    });
  }

  onSubmit() {
    if (this.createPlante.valid) {
      const nouvellePlante = this.createPlante.value; // Obtenez les valeurs du formulaire

      // Appelez la méthode du service pour créer une nouvelle plante
      this.plantService.createPlante(nouvellePlante).subscribe((response) => {
        // Traitez la réponse ou effectuez d'autres actions nécessaires
        console.log('Nouvelle plante créée :', response);
      });
      console.log(this.createPlante.value);
    }
    this.router.navigate(['/home']);
  }
}

