import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() unePlanteAAfficher!: Plant;

  constructor() {}

  ngOnInit(): void {}
  // unePlanteAAfficher: Plant = {
  //   id: 952438,
  //   nom: 'Anthurium, pot D12cm',
  //   soleil: 'moyen',
  //   arrosage: 2,
  //   categorie: 'plantes fleuries',
  //   image:
  //     'https://images.truffaut.com/media/catalog/product/cdn:///Articles/jpg/0952000/952438_003.jpg',
  };

