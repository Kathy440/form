import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalStorageService } from '../service/localStorage.service';

@Component({
  selector: 'app-form-material2',
  templateUrl: './form-material2.component.html',
  styleUrls: ['./form-material2.component.scss']
})
export class FormMaterial2Component implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService
  ) {}

  profileForm: any;

  ngOnInit() {
    const value = this.localStorageService.getData('profilFormData');
    this.profileForm = this.formBuilder.group({
      firstName: [value && value.firstName],
      lastName: [value && value.lastName],
      address: [value && value.address],
      dob: [value && value.dob],
      gender: [value && value.gender]
    });
    this.saveForm();
  }

  saveForm() {
    const value = this.localStorageService.getData('profilFormData');
    this.profileForm.valueChanges.subscribe(value => {
      this.localStorageService.setData(
        'profilFormData',
        this.profileForm.value
      );
    });
  }
}
