import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';
import { MuncipioService } from '../../shared/services/muncipio.service';
import { PlantService } from '../services/plant.service';

@Component({
  selector: 'app-plant-edit',
  templateUrl: './plant-edit.component.html',
  styleUrls: ['./plant-edit.component.scss'],
})
export class PlantEditComponent implements OnInit {
  createPlantForm: FormGroup;
  municipios = [];
  isLoading = false;

  constructor(
    private plantService: PlantService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private municipioService: MuncipioService,
    private toastrService: ToastrService,
    private fb: FormBuilder
  ) {
    this.getAllMunicipios();
  }

  ngOnInit() {
    this.plantService
      .getPlantById(this.activedRoute.snapshot.params['id'])
      .subscribe((data) => {

        this.createPlantForm = this.fb.group({
          plantId: [data.plantId],
          name: [data.name, Validators.required],
          address: [data.address, Validators.required],
          latitude: [data.latitude, Validators.required],
          longitude: [data.longitude, Validators.required],
          municipioId: [data.municipioId, Validators.required],
          operatorsQuantity: [data.operatorsQuantity, Validators.required],
        });
      });
  }

  create() {
    if (this.createPlantForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.plantService.updatePlant(this.createPlantForm.value).subscribe(
      () => {
        this.toastrService.success('Creado Exitosamente');
        this.router.navigate(['/plantas']); 
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.toastrService.error(error);
      }
    );
  }

  private getAllMunicipios() {
    this.municipioService.getAll().subscribe(
      (data) => {
        this.municipios = data.municipios;
      },
      (error) => {
        this.toastrService.error(error);
      },
      () => {}
    );
  }
}
