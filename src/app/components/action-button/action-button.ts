import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-action-button',
  styleUrl: './action-button.css',
  templateUrl: './action-button.html',
})
export class ActionButton {
  name = input.required<string>();
  theme = input<'default' | 'delete' | 'submit'>('default');
  click = output();
}
