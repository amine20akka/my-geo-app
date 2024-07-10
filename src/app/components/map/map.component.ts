import { Component, OnInit } from '@angular/core';
import { MapService } from '../../../services/map.service';
import { LayersService } from '../../../services/layers.service';
import { BackgroundSelectorComponent } from "../background-selector/background-selector.component";

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  imports: [BackgroundSelectorComponent]
})
export class MapComponent implements OnInit {
  constructor(private mapService: MapService, private layersService: LayersService) { }

    ngOnInit(): void {
      this.mapService.initializeMap('map');

      // Fetch and add WMS layers from GeoServer
      this.layersService.fetchLayersFromWorkspace('test_data').then(data => {
      this.layersService.processWorkspaceLayersData(data, this.mapService.addWMSLayer.bind(this.mapService));
    });
    }
}