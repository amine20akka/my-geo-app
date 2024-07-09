import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { defaults as defaultControls, ZoomSlider, FullScreen } from 'ol/control';
import { defaults as defaultInteractions, DblClickDragZoom } from 'ol/interaction';
import { LayersService } from '../../../services/geoserver.service';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private layersService: LayersService) {}

  ngOnInit(): void {
    const map = new Map({
      target: 'map',
      interactions: defaultInteractions().extend([
        new DblClickDragZoom(),
      ]),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      }),
      controls: defaultControls().extend([
        new ZoomSlider(),
        new FullScreen(),
      ])
    });

    this.layersService.setMap(map);

    this.layersService.fetchLayersFromWorkspace('your_workspace').then((data: any) => {
      this.layersService.processWorkspaceLayersData(data);
    }).catch((error: any) => {
      console.error(error);
    });
    
  }
}