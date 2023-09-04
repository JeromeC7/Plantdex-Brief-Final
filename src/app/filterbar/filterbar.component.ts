import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-filterbar",
  templateUrl: "./filterbar.component.html",
  styleUrls: ["./filterbar.component.css"],
})
export class FilterBarComponent {
  @Input() categories!: string[];
  @Output() selectedCategories = new EventEmitter();
  checkedCategorie: string[] = [];

  onCheckCategory(e: Event) {
    const target = e.target as HTMLInputElement;
    console.log("Valeur de la checkbox", target.value);
    console.log("Est elle cochée ? : ", target.checked);

    if (target.checked) {
      // Cas où tout est coché
      if (this.checkedCategorie.length === this.categories.length) {
        this.checkedCategorie = [];
      }
      // On ajoute la catégorie cochée à la liste
      this.checkedCategorie.push(target.value);
    } else {
      // On retire la catégorie décochée
      // Filter() ne conserve que les catégories différentes
      this.checkedCategorie = this.checkedCategorie.filter(
        (x) => x != target.value
      );
    }

    // Cas où tout est décoché
    if (this.checkedCategorie.length === 0) {
      this.checkedCategorie = [...this.categories];
    }
    console.log(this.checkedCategorie);

    // Le .emit() de l'output() devra se faire ici
    // Catégories sélectionnées vers page home
    this.selectedCategories.emit(this.checkedCategorie);

  }
}