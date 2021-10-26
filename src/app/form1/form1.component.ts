import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  constructor(private fb: FormBuilder) {}

  angForm: FormGroup;

  ngOnInit(): void {
    // 1 - Recup valeur dans le local storage
    const value = JSON.parse(localStorage.getItem('angFormData'));
    // 2 - Cree le form avec les valeurs du formulaire
    this.angForm = this.fb.group({
      name: [value && value.name],
      address: [value && value.address]
    });

    console.log(this.angForm);

    // 3 - Met a jour le  local storage on every modification
    //on utilise un observable pr qu'a fois quand la valeur change
    this.angForm.valueChanges.subscribe(value => {
      localStorage.setItem('angFormData', JSON.stringify(this.angForm.value));
      console.log(
        'ss',
        localStorage.setItem('angFormData', JSON.stringify(this.angForm.value))
      );
    });
  }
}
