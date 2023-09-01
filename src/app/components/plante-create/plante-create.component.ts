import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from 'src/app/services/plant.service';
import { Plant } from 'src/app/models/plant';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-plante-create',
  templateUrl: './plante-create.component.html',
  styleUrls: ['./plante-create.component.css']
})
export class PlanteCreateComponent implements OnInit{
 createForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private instancePlantService: PlantService, private activatedRoute:ActivatedRoute, private router:Router) {
    this.createForm = new FormGroup({
        id: new FormControl(''),
        nom: new FormControl(''), // Initialize with an empty string
        categorie: new FormControl(''),
        arrosage: new FormControl(''),
        soleil: new FormControl(''),
        image: new FormControl('')
      });
  }

   ngOnInit() {
  this.createForm = this.formBuilder.group({
      id: ['123456', Validators.required],
      nom: ['Plante test', Validators.required], // Initialize with an empty string and add any validators you need
      categorie: ['Belle plante', Validators.required] ,// Initialize with an empty string and add any validators you need
      arrosage: ['1', Validators.required], // Initialize with an empty string and add any validators you need
      soleil: ['Moyen', Validators.required],
      image: ['https://images.truffaut.com/media/catalog/product/cdn:///Articles/jpg/0910000/910674_001.jpg', Validators.required]
    });
  //console.log('ngonInit '+this.nouveauNom)
   }
  

  create(){
    const createForm = this.createForm;
    const nouvellePlante: Plant ={
      id: Number(createForm.get('id')?.value),   
      nom: createForm.get('nom')?.value,   
      arrosage: Number(createForm.get('arrosage')?.value), 
      soleil: createForm.get('soleil')?.value,
      categorie: createForm.get('categorie')?.value,
      image: createForm.get('image')?.value
    }
    this.instancePlantService.createPlant(nouvellePlante).subscribe((response) => {
    });
    console.log('Plante ajoutée!'+nouvellePlante);
    this.router.navigate(['/home']);
  }
}
