import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup | any; // This will hold our form

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Create the main form with necessary fields
    this.registrationForm = this.fb.group({
      parentsNames: [''],
      email: [''],
      password: [''],
      passwordConfirmation: [''],
      postalCode: [''],
      cellPhone: [''],
      children: this.fb.array([this.createChild()])
    });
  }

  // Helper function to create a new child FormGroup
  createChild(): FormGroup {
    return this.fb.group({
      fullName: [''],
      age: ['']
    });
  }

  // Getter to access children FormArray
  get children(): FormArray {
    return this.registrationForm.get('children') as FormArray;
  }

  // Function to add a new child
  addChild(): void {
    this.children.push(this.createChild());
  }

  // Function to remove a child by index
  removeChild(index: number): void {
    if (index > 0) {
      this.children.removeAt(index);
    }
  }

  // Function to handle form submission
  onSubmit(): void {
    console.log(this.registrationForm.value);
  }
}
