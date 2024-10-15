import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housinglocation.interface';
import { wait } from '../lib/wait';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  private apiUrl = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    await wait(1000);
    const data = await fetch(this.apiUrl);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    await wait(1000);
    const data = await fetch(`${this.apiUrl}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
