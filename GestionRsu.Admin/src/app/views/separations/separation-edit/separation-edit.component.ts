import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from 'ngx-editor';
import { ToastrService } from 'ngx-toastr';
import { SeparationService } from '../../../services/separation.service';
import { FilterBase } from '../../shared/models/pagination';
import { ProductService } from '../../products/services/product.service';

@Component({
  selector: 'app-separation-edit',
  templateUrl: './separation-edit.component.html',
  styleUrls: ['./separation-edit.component.scss']
})
export class SeparationEditComponent implements OnInit {

  isLoading = false;
  createSeparationForm: FormGroup;
  products= [];
  measuresUnits: Array<string> = ['KG', 'LTS', 'M3'];
  filtersProduct = new FilterBase(); 
  
  constructor(
    private separationService: SeparationService,
    private productService: ProductService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private toastService: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {

    this.separationService.getById(this.activedRoute.snapshot.params['id']).subscribe(
      (data) => {
        this.createSeparationForm = this.fb.group({
          description: [data.description, Validators.required],
          quantity: [data.quantity, Validators.required],
          measuresUnit: [data.measuresUnit, Validators.required],
          productId: [data.productId, Validators.required]
        });
      },
      (error) => {
        this.toastService.error(error);
      }
    );


    this.getAllProduct();
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
      console.log(res)
       this.products = res.entity as unknown as [];
    }, error => {
      this.toastService.error(error);
    });
  }


}
