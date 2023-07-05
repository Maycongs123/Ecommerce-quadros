import { Component } from '@angular/core';

@Component({
  selector: 'app-card-size',
  templateUrl: './card-size.component.html',
  styleUrls: ['./card-size.component.scss'],
})
export class CardSizeComponent {
  isToggled: boolean = false;

  toggleButton() {
    this.isToggled = !this.isToggled;
  }
}
