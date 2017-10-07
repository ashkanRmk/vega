import { VehicleService } from './../../services/vehicle.service';
import { Vehicle } from './../../models/vehicle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[];


  constructor(private vehicleservice: VehicleService) { }

  ngOnInit() {
    this.vehicleservice.getVehicles()
      .subscribe(vehicles => this.vehicles = vehicles);
  }

}
