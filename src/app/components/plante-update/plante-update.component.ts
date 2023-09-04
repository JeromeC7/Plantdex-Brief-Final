import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from 'src/app/services/plant.service';
import { Plant } from 'src/app/models/plant';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-plante-update',
  templateUrl: './plante-update.component.html',
  styleUrls: ['./plante-update.component.css'],
})
export class PlanteUpdateComponent implements OnInit {
  updateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private instancePlantService: PlantService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.updateForm = new FormGroup({
      nouveauNom: new FormControl(''), // Initialize with an empty string
    });
  }

  unePlanteAAfficher!: Plant;
  nouveauNom: string = '';
  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      nouveauNom: ['', Validators.required], // Initialize with an empty string and add any validators you need
    });
    console.log('ngonInit ' + this.nouveauNom);
    const id = this.activatedRoute.snapshot.params['id'];
    this.instancePlantService.getPlantbyId(id).subscribe((response) => {
      console.log(response.data);
      this.unePlanteAAfficher = response.data;
    });
  }

  update(id: number) {
    const updateForm = this.updateForm;
    const nouveauNom = updateForm.get('nouveauNom');
    if (nouveauNom) {
      const value = nouveauNom.value;
      console.log('le nouveau nom est => ' + nouveauNom.value);
      this.instancePlantService
        .updatePlant(id, nouveauNom.value)
        .subscribe((response) => {
          console.log('la reponse est => ' + response);
        });
      console.log('Update effectué!' + nouveauNom.value);
    }
    this.router.navigate(['/home']);
  }
}
