import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-material2',
  templateUrl: './form-material2.component.html',
  styleUrls: ['./form-material2.component.scss']
})
export class FormMaterial2Component implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;
  myid!: any;
  profileForm: any;

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      address: new FormControl(),
      dob: new FormControl(),
      gender: new FormControl()
    });
    this.display();
  }

  /* profileForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    address: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    gender: ['', [Validators.required]]
  }); */

  display() {
    this.myid = localStorage.getItem('formdata');
    console.log('x', this.myid);
  }

  saveForm() {
    if (this.profileForm.valid) {
      console.log('Profile form data : ', this.profileForm.value);
      localStorage.setItem('formdata', JSON.stringify(this.profileForm.value));
    }
  }
}
