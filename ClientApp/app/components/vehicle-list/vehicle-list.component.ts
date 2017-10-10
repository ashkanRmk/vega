import { VehicleService } from './../../services/vehicle.service';
import { Vehicle, KeyValuePair } from './../../models/vehicle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[];
  makes: KeyValuePair[];
  models: KeyValuePair[];
  filter: any = {};

  constructor(private vehicleservice: VehicleService) { }

  ngOnInit() {
    this.vehicleservice.getMakes()
      .subscribe(makes => this.makes = makes);

    this.vehicleservice.getModels()
      .subscribe(models => this.models = models);

    this.populateVehicle();
  }

  private populateVehicle() {
    this.vehicleservice.getVehicles(this.filter)
      .subscribe(vehicles => this.vehicles = vehicles);
  }

  onFilterChange() {
    this.populateVehicle();
  }

  resetFilter() {
    this.filter = {};
    this.onFilterChange();
  }
}
