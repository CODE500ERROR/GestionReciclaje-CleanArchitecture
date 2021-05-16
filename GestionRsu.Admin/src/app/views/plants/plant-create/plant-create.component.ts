import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';
import { MuncipioService } from '../../shared/services/muncipio.service';
import { PlantService } from '../services/plant.service';

@Component({
  selector: 'app-plant-create',
  templateUrl: './plant-create.component.html',
  styleUrls: ['./plant-create.component.scss'],
})
export class PlantCreateComponent implements OnInit {
  createPlantForm: FormGroup;
  municipios = [];
  isLoading = false;

  constructor(
    private plantService: PlantService,
    private router: Router,
    private municipioService: MuncipioService,
    private toastrService: ToastrService,
    private fb: FormBuilder
  ) {
    this.getAllMunicipios();

  }

  ngOnInit() {
    this.createRegisterForm();
  }

  private createRegisterForm() {
    this.createPlantForm = this.fb.group({
      name: [null, Validators.required],
      address: [null, Validators.required],
      latitude: [null, Validators.required],
      longitude: [null, Validators.required],
      municipioId: [null, Validators.required],
      operatorsQuantity: [null, Validators.required],
    });
  }

  get f() {
    return this.createPlantForm.controls;
  }

  create() {
    if (this.createPlantForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.plantService.create(this.createPlantForm.value).subscribe(
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
