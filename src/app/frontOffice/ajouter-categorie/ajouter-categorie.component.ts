import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../../services/categorie.service";
import {Router} from "@angular/router";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Assignmenent } from 'src/app/models/categorie';


@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {

  categorieForm!: FormGroup;





  constructor(private fb: FormBuilder, private categorieService: CategorieService) {
  }

  ngOnInit(): void {
    this.categorieForm = this.fb.group({
      type: ['', Validators.required],
      subCategories: this.fb.array([this.fb.group({
        type: ['', Validators.required],
        subCategories: this.fb.array([])
      })])
    });

  }

  get subCategories() {
    return this.categorieForm.get('subCategories') as FormArray;
  }

  addSubCategory(i: number) {
    const subCategory = this.fb.group({
      type: ['', Validators.required],
      subCategories: this.fb.array([])
    });
    this.subCategories.push(subCategory);
  }

  removeSubCategory(index: number) {
    this.subCategories.removeAt(index);
  }

  onSubmit() {
    const categorie: Assignmenent = this.categorieForm.value;
    this.categorieService.addCategoryWithSubCategories(categorie).subscribe(() => {
      console.log('Categorie créée avec succès !');
      this.categorieForm.reset();
    }, error =>{
      console.log('Erreur lors de la création de la catégorie : ', error);
    });
  }



}

