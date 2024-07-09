import { Injectable } from '@angular/core';
import axios from 'axios';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import Map from 'ol/Map';

@Injectable({
  providedIn: 'root'
})
export class LayersService {
  private geoServerUrl = 'http://localhost:8080/geoserver/rest';
  private map!: Map;

  constructor() {}

  setMap(map: Map) {
    this.map = map;
  }

  fetchLayersFromWorkspace(workspace: string) {
    const url = `${this.geoServerUrl}/workspaces/${workspace}/layers`;

    return axios.get(url, {
      auth: {
        username: 'admin',
        password: 'geoserver'
      }
    })
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Failed to fetch layers');
      }
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching layers:', error);
      throw error;
    });
  }

  addWMSLayer(layerName: string) {
    if (!this.map) {
      console.error('Map is not set');
      return;
    }

    const wmsLayer = new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/test_data/wms',
        params: {
          'SERVICE': 'WMS',
          'VERSION': '1.1.0',
          'REQUEST': 'GetMap',
          'LAYERS': layerName,
          'STYLES': '',
          'SRS': 'EPSG:4326',
          'FORMAT': 'image/png'
        },
        serverType: 'geoserver'
      })
    });
    this.map.addLayer(wmsLayer);
  }

  processWorkspaceLayersData(data: any) {
    if (!data || !data.layers) {
      console.error('Invalid layers data:', data);
      return;
    }
  
    const layers = data.layers.layer;
    const layerNames = layers.map((layer: any) => layer.name);
  
    layerNames.forEach((layerName: string) => {
      this.addWMSLayer(layerName);
    });
  }
  
}