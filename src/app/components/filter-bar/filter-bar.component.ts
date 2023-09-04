import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent {
  @Input() categoriesRecupDeLaHome!: string[];
  checkedCategorie: string[] = [];
  @Output() categoryEnvoiParent = new EventEmitter<string[]>();
 

  onCheckCategory(e: Event) {
    console.log(e);

    const target = e.target as HTMLInputElement;
    console.log('valeur de la checkbox', target.value);
    console.log('Est elle cochée ? : ', target.checked);
    
    if(target.checked) {
      if (this.checkedCategorie.length === this.categoriesRecupDeLaHome.length){
        this.checkedCategorie = [];
      }
        this.checkedCategorie.push(target.value);
    } else {
      this.checkedCategorie = this.checkedCategorie.filter((categ) => categ !== target.value);
    }

    if(this.checkedCategorie.length === 0) {
      this.checkedCategorie = [...this.categoriesRecupDeLaHome];
    }

    console.log('this.checkedCategories', this.checkedCategorie);
this.categoryEnvoiParent.emit(this.checkedCategorie);
  }
}
