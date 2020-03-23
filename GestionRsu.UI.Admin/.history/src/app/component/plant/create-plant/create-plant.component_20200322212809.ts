import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlantService } from '../../../shared/services/plant.service';
import { AlertifyService } from '../../../shared/services/alertify.service';
import { MuncipioService } from '../../../shared/services/muncipio.service';
import { Plant } from '../../../shared/models/plant';

@Component({
  selector: 'app-create-plant',
  templateUrl: './create-plant.component.html',
  styleUrls: ['./create-plant.component.css']
})
export class CreatePlantComponent implements OnInit {
  plantRegister: Plant;
  createPlantForm: FormGroup;
  municipios: any[];

    constructor(private plantService: PlantService,
                private router: Router,
                private municipioService: MuncipioService,
                private alertService: AlertifyService, private fb: FormBuilder) {}

  ngOnInit() {
    this.createRegisterForm();
    this.getAllMunicipios();
  }

  createRegisterForm() {
    this.createPlantForm = this.fb.group(
        {
          name: ['', Validators.required],
          address: ['', Validators.required],
          municipioId: ['', Validators.required],
          operatorsQuantity: ['', Validators.required],
        }
    );
  }

  get f() { return this.createPlantForm.controls; }

  createPlant() {
    if (this.createPlantForm.invalid) {return; }

    this.plantRegister = Object.assign({}, this.createPlantForm.value);

    this.plantService.create(this.plantRegister).subscribe(() => {
       this.alertService.success('Creado Exitosamente');
       this.goToList();
     }, error => {
       this.alertService.error(error);
     });
 }

 private goToList() {
   this.router.navigate(['/plantas']);
 }

 getAllMunicipios() {
   this.municipioService.getAll().subscribe(data =>  {
    this.municipios = data.municipios;
   }, error => {
      this.alertService.error(error);
   }, () => {
   });
 }

}
