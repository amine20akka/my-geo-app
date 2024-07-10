import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-background-selector',
  standalone: true,
  imports: [],
  templateUrl: './background-selector.component.html',
  styleUrl: './background-selector.component.css'
})
export class BackgroundSelectorComponent {
  
  @Output() backgroundChange = new EventEmitter<string>();

  constructor() { }

  onBackgroundChange(event: any): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.backgroundChange.emit(selectedValue);
  }
}
