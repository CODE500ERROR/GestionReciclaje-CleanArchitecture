import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../articles/services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  parents = [];
  children = [];
  isLoading = false;
  createProductForm: FormGroup;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private toastService: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
    this.getAllParent();
  }

  getCategoryByParent() {
    this.categoryService.getByParent(this.createProductForm.value.categoryParentId).subscribe(data => {
      this.children = data.children;
     }, error => {
       this.toastService.error(error);
     }, () => {
     });
   }
 

  create() {
    if (this.createProductForm.invalid) {return; }
    this.isLoading = true;
    this.productService.create(this.createProductForm.value).subscribe(() => {
       this.toastService.success('Creado Exitosamente');
       this.isLoading = false;
     }, error => {
       this.toastService.error(error);
       this.isLoading = false;
     }, () => {
         this.router.navigate(['/productos']);
     });
 }

  private createRegisterForm() {
    this.createProductForm = this.fb.group({
      name: [null, Validators.required],
      description: [null],
      categoryParentId: [null],
      categoryId: [null, Validators.required],
    });
  }


  private getAllParent() {
    this.categoryService.getAllParent().subscribe(data => {
     this.parents = data.parents as unknown as [];
   }, error => {
     this.toastService.error(error);
   }, () => {
   });
  }
 


  
}
