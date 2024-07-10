import { Component, Input } from '@angular/core';
import { LayersService } from '../../../services/layers.service';
import { MapService } from '../../../services/map.service';

@Component({
  selector: 'app-layer',
  standalone: true,
  imports: [],
  templateUrl: './layer.component.html',
  styleUrl: './layer.component.css'
})
export class LayerComponent {
  @Input() workspace: string = '';

  constructor(private layersService: LayersService, private mapService: MapService) { }

  ngOnInit(): void {
    this.layersService.fetchLayersFromWorkspace(this.workspace)
      .then(data => {
        this.layersService.processWorkspaceLayersData(data, this.mapService.addWMSLayer.bind(this.mapService));
      })
      .catch(error => {
        console.error('Error loading layers:', error);
      });
  }

  
}
