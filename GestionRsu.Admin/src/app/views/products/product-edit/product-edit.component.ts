import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../articles/services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  editProductForm: FormGroup;
  parents  = [];
  children = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastService: ToastrService,
    private categoryService: CategoryService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getById(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.editProductForm = this.fb.group({
          productId: [data.productId, Validators.required],
          name: [data.name, Validators.required],
          description: [data.description],
          categoryId: [data.categoryId, Validators.required],
          categoryParentId: [data.categoryParentId]
        });
        this.getCategoryByParent();
      },
      (error) => {
        this.toastService.error(error);
      }
    );
    this.getAllParent();
    
  }

  update(){
    if (this.editProductForm.invalid) {
      return;
    }
    this.productService.update(this.editProductForm.value).subscribe(
      next => {
        this.toastService.success('Modificado exitosamente');
        this.router.navigate(['/productos']);
      },
      error => {
        this.toastService.error(error);
      });
  }

  private getAllParent() {
    this.categoryService.getAllParent().subscribe(
      data => {
        this.parents = (data.parents as unknown) as [];
      },
      error => {
        this.toastService.error(error);
      },
      () => {}
    );
  }

  getCategoryByParent() {

    this.categoryService
      .getByParent(this.editProductForm.value.categoryParentId)
      .subscribe(
        data => {
          this.children = data.children;
        },
        error => {
          this.toastService.error(error);
        }
      );
  }

}
