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
  query: any = {
    pageSize: 3
  };
  columns = [
    { title: 'id' },
    { title: 'Contact Name', key: 'contactName', isSortable: true },
    { title: 'Make', key: 'make', isSortable: true },
    { title: 'Model', key: 'model', isSortable: true },
    {}
  ];

  constructor(private vehicleservice: VehicleService) { }

  ngOnInit() {
    this.vehicleservice.getMakes()
      .subscribe(makes => this.makes = makes);

    this.vehicleservice.getModels()
      .subscribe(models => this.models = models);

    this.populateVehicle();
  }

  private populateVehicle() {
    this.vehicleservice.getVehicles(this.query)
      .subscribe(vehicles => this.vehicles = vehicles);
  }

  onFilterChange() {
    this.populateVehicle();
  }

  resetFilter() {
    this.query = {};
    this.onFilterChange();
  }

  sortBy(columName: any) {
    if (this.query.sortBy === columName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columName;
      this.query.isSortAscending = true;
    }
    this.populateVehicle();
  }

  onPageChange(page: any) {
    this.query.page = page;
    this.populateVehicle();
  }
}
