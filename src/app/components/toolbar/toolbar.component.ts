import { Component, OnInit } from '@angular/core';
import { LayerMenuComponent } from "../layer-menu/layer-menu.component";
import { FullscreenButtonComponent } from "../fullscreen-button/fullscreen-button.component";
import { BackgroundSelectorComponent } from "../background-selector/background-selector.component";
import { MapService } from '../../../services/map.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  imports: [LayerMenuComponent, FullscreenButtonComponent, BackgroundSelectorComponent]
})
export class ToolbarComponent implements OnInit {
  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    
  }
  onBackgroundChange(selectedValue: string): void {
      this.mapService.onBackgroundChange(selectedValue);
    }
}
