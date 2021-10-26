import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form-material2',
  templateUrl: './form-material2.component.html',
  styleUrls: ['./form-material2.component.scss']
})
export class FormMaterial2Component implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  profileForm: any;

  ngOnInit(): void {
    const value = JSON.parse(localStorage.getItem('profilFormData'));
    this.profileForm = this.formBuilder.group({
      firstName: [value && value.firstName],
      lastName: [value && value.lastName],
      address: [value && value.address],
      dob: [value && value.dob],
      gender: [value && value.gender]
    });
  }

  saveForm() {
    const value = JSON.parse(localStorage.getItem('profilFormData'));

    this.profileForm.valueChanges.subscribe(value => {
      localStorage.setItem(
        'profilFormData',
        JSON.stringify(this.profileForm.value)
      );
    });
  }
}
