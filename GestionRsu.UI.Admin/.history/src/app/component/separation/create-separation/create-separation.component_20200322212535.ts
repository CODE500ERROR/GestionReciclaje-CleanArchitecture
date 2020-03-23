import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeparationService } from '../../../shared/services/separation.service';
import { ProductService } from '../../../shared/services/product.service';
import { AlertifyService } from '../../../shared/services/alertify.service';
import { Separation } from '../../../shared/models/separation';
import { Product } from '../../../shared/models/product';
import { ProductFilter } from '../../../shared/models/product-filter';

@Component({
  selector: 'app-create-separation',
  templateUrl: './create-separation.component.html',
  styleUrls: ['./create-separation.component.css']
})
export class CreateSeparationComponent implements OnInit {
  separationRegister: Separation;
  createSeparationForm: FormGroup;
  products: Product[];
  measuresUnits:Array<string> = ['KG', 'LTS', 'M3'];
  filtersProduct = new ProductFilter(); 


  constructor(
    private separationService: SeparationService,
    private productService: ProductService,
    private router: Router,
    private alertService: AlertifyService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createRegisterForm();
    this.getAllProduct();
  }

  createRegisterForm() {
    this.createSeparationForm = this.fb.group({
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      measuresUnit: ['', Validators.required],
      productId: ['', Validators.required]
    });
  }

  get f() {
    return this.createSeparationForm.controls;
  }

  createSeparation() {
    if (this.createSeparationForm.invalid) {
      return;
    }
    this.separationService.create(this.createSeparationForm.value).subscribe(
      () => {
        this.alertService.success('Creado Exitosamente');
        this.router.navigate(['separaciones']);
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

  cancel() {
    this.router.navigate(['separaciones']);
  }

  getAllProduct() {
    this.productService.getAll(this.filtersProduct).subscribe((res) => {

       this.products = res.entity as unknown as Product[];
    }, error => {
      this.alertService.error(error);
    });
  }

}
