import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    console.log('fd', localStorage.getItem('formdata'));
  }

  angForm: FormGroup;

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  saveForm() {
    if (this.angForm.valid) {
      console.log('Profile form data : ', this.angForm.value);
      localStorage.setItem('formdata', JSON.stringify(this.angForm.value));
    }
  }
}
