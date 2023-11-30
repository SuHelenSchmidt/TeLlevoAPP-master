import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router

declare var google: any;

interface WayPoint{
  location: {
  lat: number,
  lng: number,
  };
  stopover: boolean;
}

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  map: any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  origin = { lat: -36.7950959684763, lng: -73.06265157521013};//duoc
  destination = { lat: -36.791401549217674, lng: -73.06649249853115 };//mall

  wayPoints: WayPoint[] = [
    {
      location: { lat: -36.79561361090616, lng: -73.06976203503466},//lider
      stopover: true,
    },
    {
      location: { lat: -36.79822319808537, lng: -73.06752246678882},//escuela de carabinero
      stopover: true,
    },
    {
      location: { lat: -36.791401549217674, lng: -73.06649249853115},//mall
      stopover: true,
    },
  ];

  constructor(private router: Router) { } // Inyecta el Router en el constructor

  ngOnInit() {
    this.loadMap();
  }

  redirigirAlMenu() {
    this.router.navigate(['/menu']); // Reemplaza '/menu' con la ruta real a tu menú
  }
  loadMap(){
    //create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map')!;
    const indicatorsEle: HTMLElement = document.getElementById('indicators')!;
    //create map
    this.map = new google.maps.Map(mapEle, {
      center: this.origin,
      zoom: 12
    });

    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(indicatorsEle);

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.calculateRoute();
    });
  }
  private calculateRoute(){
    this.directionsService.route({
      origin: this.origin,
      destination: this.destination,
      waypoints: this.wayPoints,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response: any, status: string) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsDisplay.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  }
}
