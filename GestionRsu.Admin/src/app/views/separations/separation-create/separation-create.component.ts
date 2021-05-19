import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';
import { SeparationService } from '../../../services/separation.service';
import { ProductService } from '../../products/services/product.service';
import { FilterBase } from '../../shared/models/pagination';

@Component({
  selector: 'app-separation-create',
  templateUrl: './separation-create.component.html',
  styleUrls: ['./separation-create.component.scss']
})
export class SeparationCreateComponent implements OnInit {
  isLoading = false;
  createSeparationForm: FormGroup;
  products= [];
  measuresUnits: Array<string> = ['KG', 'LTS', 'M3'];
  filtersProduct = new FilterBase(); 
  
  constructor(
    private separationService: SeparationService,
    private productService: ProductService,
    private router: Router,
    private toastService: ToastrService,
    private fb: FormBuilder
  ) {this.filtersProduct.pageSize = 1000;}

  ngOnInit() {
    this.createRegisterForm();
    this.getAllProduct();
  }

  private createRegisterForm() {
    this.createSeparationForm = this.fb.group({
      description: [null, Validators.required],
      quantity: [null, Validators.required],
      measuresUnit: [null, Validators.required],
      productId: [null, Validators.required]
    });
  }

  create() {
    if (this.createSeparationForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.separationService.create(this.createSeparationForm.value).subscribe(
      () => {
        this.toastService.success('Creado Exitosamente');
        this.router.navigate(['separaciones']);
        this.isLoading = false;
      },
      error => {
        this.toastService.error(error);
        this.isLoading = false;
      }
    );
  }

  private getAllProduct() {
    this.productService.getAll(this.filtersProduct).subscribe((res) => {
       this.products = res.entity as unknown as [];
    }, error => {
      this.toastService.error(error);
    });
  }


}
