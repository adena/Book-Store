import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { } from 'googlemaps';
import { DOCUMENT } from '@angular/common';
import { setupTestingRouter } from '@angular/router/testing';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('#gmap') public gmap: ElementRef;
  map: google.maps.Map;

  constructor(@Inject(DOCUMENT) document) { }

  isTracking = false;

  currentLat: any;
  currentLong: any;

  location: google.maps.LatLng;
  locationOffice: google.maps.LatLng;
  marker: google.maps.Marker;
  markerOffice: google.maps.Marker;
  directionsService: google.maps.DirectionsService;
  directionsDisplay: google.maps.DirectionsRenderer;
  ngOnInit() {

  }



  ngAfterContentInit() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);

      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }


    var mapProp = {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,

    };

    this.map = new google.maps.Map(document.getElementById('gmap'), mapProp);


    // this.getRoute();
  }



  showPosition(position) {
    var bounds = new google.maps.LatLngBounds();
    this.locationOffice = new google.maps.LatLng(42.711966, 23.266702);
    bounds.extend(this.locationOffice);

    this.markerOffice = new google.maps.Marker({
      position: this.locationOffice,
      map: this.map,
      label: {
        color: 'red',
        fontWeight: 'bold',
        text: 'Our Office',
      },
    });

    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    this.location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    // this.map.panTo(this.location);

    this.marker = new google.maps.Marker({
      position: this.location,
      map: this.map,
      label: {
        color: 'red',
        fontWeight: 'bold',
        text: 'Your Location',
      },

    });
    this.marker.setPosition(this.location);

    bounds.extend(this.location);

    this.map.fitBounds(bounds);


  }

  // getRoute() {
  //   var request = {
  //     origin: new google.maps.LatLng(42.711966, 23.266702),
  //     destination: new google.maps.LatLng(42.7103529, 23.293486899999998),
  //     travelMode: google.maps.TravelMode.DRIVING
  //   };

  //   this.directionsService = new google.maps.DirectionsService();
  //   // var rendererOptions = {
  //   //   map: this.map
  //   // }
  //   this.directionsDisplay = new google.maps.DirectionsRenderer();
  //   this.directionsDisplay.setMap(this.map);


  //   this.directionsService.route(request, function (response, status) {
  //     if (status == google.maps.DirectionsStatus.OK) {
  //       this.directionsDisplay.setDirections(response);
  //     }
  //     else {
  //       alert("Directions Request failed:" + status);
  //     }

  //   });
  // }

}
