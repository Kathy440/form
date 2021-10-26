import { Component, OnInit } from '@angular/core';
import { Cat } from '../model/cat';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.scss']
})
export class CatFormComponent implements OnInit {
  constructor() {}

  cats: Cat[] = [];

  newCat: Cat = new Cat();

  catToUpdtate = {};

  ngOnInit(): void {
    if (localStorage.getItem('cats') != null) {
      this.cats = JSON.parse(localStorage.getItem('cats'));
    }
  }

  addCat(): void {
    this.cats.push(this.newCat);
    //renitialiser pour pouvoir ajouter un nouveaux
    this.newCat = new Cat();

    //set item insérer et get pour rechercher
    localStorage.setItem('cats', JSON.stringify(this.cats)); //prend un obj et met sous forme de string
  }
}
