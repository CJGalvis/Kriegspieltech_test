import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServiceService } from './service.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Kriegspieltech';
  public userControl = new FormControl();
  public userResponse: any;

  constructor(private api: ServiceService) {}

  async getUser() {
    try {
      const dni = this.userControl.value;
      const response = await firstValueFrom(this.api.usersAPI(dni));
      if (response) {
        this.userResponse = response;
      }
    } catch (error) {
      this.userResponse = null;
    }
  }
}
