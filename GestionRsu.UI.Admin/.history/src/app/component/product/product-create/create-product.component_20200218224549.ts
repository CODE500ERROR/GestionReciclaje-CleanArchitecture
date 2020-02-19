import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AlertifyService } from '../../../shared/services/alertify.service';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { Product } from '../../../shared/models/product';
import { Category } from '../../../shared/models/category';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-Product.component.html',
  styleUrls: ['./create-Product.component.css']
})
export class CreateProductComponent implements OnInit {
  
  productRegister: Product;
  parents: Category[];
  children: Category[];
  createProductForm: FormGroup;

    constructor(private productService: ProductService,
                private categoryService: CategoryService,
                private router: Router,
                private alertService: AlertifyService, private fb: FormBuilder) {}

  ngOnInit() {
    this.createRegisterForm();
    this.getAllParent();
  }

  createRegisterForm() {
    this.createProductForm = this.fb.group(
        {
          name: ['', Validators.required],
          description: [''],
          categoryParentId : [''],
          categoryId: ['', Validators.required]
        }
    );
  }

  get f() { return this.createProductForm.controls; }

  save() {
    if (this.createProductForm.invalid) {return; }

    this.productRegister = Object.assign({}, this.createProductForm.value);

    this.productService.create(this.productRegister).subscribe(() => {
       this.alertService.success('Creado Exitosamente');
     }, error => {
       this.alertService.error(error);
     }, () => {
         this.router.navigate(['/productos']);
     });
 }

 getAllParent() {
   this.categoryService.getAllParent().subscribe(data => {
    this.parents = data.parents as unknown as Category[];
  }, error => {
    this.alertService.error(error);
  }, () => {
  });
 }

 getCategoryByParent() {
  this.categoryService.getByParent(this.createProductForm.value.categoryParentId).subscribe(data => {
    this.children = data.children;
   }, error => {
     this.alertService.error(error);
   }, () => {
   });
 }

 cancel() {
   this.router.navigate(['/productos']);
 }

}
