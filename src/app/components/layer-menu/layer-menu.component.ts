import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layer-menu',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './layer-menu.component.html',
  styleUrl: './layer-menu.component.css'
})
export class LayerMenuComponent {

  layers: any[] = [];

  toggleLayer(layer: any) {
    // Logic to toggle the layer visibility on the map
  }
}
