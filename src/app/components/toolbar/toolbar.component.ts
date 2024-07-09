import { Component, OnInit } from '@angular/core';
import { LayerMenuComponent } from "../layer-menu/layer-menu.component";
import { FullscreenButtonComponent } from "../fullscreen-button/fullscreen-button.component";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  imports: [LayerMenuComponent, FullscreenButtonComponent]
})
export class ToolbarComponent implements OnInit {

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
