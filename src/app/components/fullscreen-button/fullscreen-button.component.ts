import { Component } from '@angular/core';

@Component({
  selector: 'app-fullscreen-button',
  standalone: true,
  imports: [],
  templateUrl: './fullscreen-button.component.html',
  styleUrl: './fullscreen-button.component.css'
})
export class FullscreenButtonComponent {

  constructor() { }

  ngOnInit(): void {
    const fullscreenButton = document.getElementById('fullscreen-btn');
    if (fullscreenButton) {
      fullscreenButton.addEventListener('click', () => {
        const mapTarget = document.getElementById('map');
        if (mapTarget) {
          if (mapTarget.requestFullscreen) {
            mapTarget.requestFullscreen().catch(error => {
              console.error('Failed to enter fullscreen:', error);
            });
          }
        }
      });
    }
  }
}
