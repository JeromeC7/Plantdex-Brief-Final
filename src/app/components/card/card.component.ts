import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() unePlanteAAfficher!: Plant;

  getSunRange(){
    switch (this.unePlanteAAfficher.soleil){
      case 'peu':
        return 1;
      case 'moyen':
        return 2;
      case 'beaucoup':
        return 3;
      default:
        return 0;
    }
  }

  range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}
