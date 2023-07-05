import { Component } from '@angular/core';

@Component({
  selector: 'app-card-frame',
  templateUrl: './card-frame.component.html',
  styleUrls: ['./card-frame.component.scss'],
})
export class CardFrameComponent {
  isToggled: boolean = false;

  toggleButton() {
    this.isToggled = !this.isToggled;
  }
}
