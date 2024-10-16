import { Component, inject } from '@angular/core';
import { HousingLocation } from '../../interfaces/housinglocation.interface';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../../components/housing-location/housing-location.component';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Homes';
  isLoading = true;
  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((value) => {
      this.housingLocationList = value;
      this.filteredLocationList = value;
      this.isLoading = false;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
