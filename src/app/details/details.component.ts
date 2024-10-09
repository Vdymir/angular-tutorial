import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  title = 'Details';
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  isLoading = true;

  formState = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);

    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((data) => {
        this.housingLocation = data;
        this.isLoading = false;
      });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.formState.value.firstName ?? '',
      this.formState.value.lastName ?? '',
      this.formState.value.email ?? ''
    );
  }
}
