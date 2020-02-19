import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../shared/services/category.service';
import { AlertifyService } from '../../../shared/services/alertify.service';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product';
import { Category } from '../../../shared/models/category';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editProductForm: FormGroup;
  product: Product;
  parents: Category[];
  children: Category[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private alertService: AlertifyService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.product = data.product;
      this.createUpdateForm();
      this.getAllParent();
      this.getCategoryByParent('');
    });
  }

  createUpdateForm() {
    this.editProductForm = this.fb.group({
      productId: [this.product.productId, Validators.required],
      name: [this.product.name, Validators.required],
      description: [this.product.description],
      categoryId: [this.product.categoryId, Validators.required],
      categoryParentId: [this.product.categoryParentId]
    });
  }

  updateProduct() {
    if (this.editProductForm.invalid) {
      return;
    }
    this.product = Object.assign({}, this.editProductForm.value);
    this.productService.update(this.product).subscribe(
      next => {},
      error => {
        this.alertService.error(error);
      },
      () => {
        this.alertService.success('Modificado exitosamente');
      }
    );
  }

  cancel() {
    this.router.navigate(['/productos']);
  }

  getAllParent() {
    this.categoryService.getAllParent().subscribe(
      data => {
        this.parents = (data.parents as unknown) as Category[];
      },
      error => {
        this.alertService.error(error);
      },
      () => {}
    );
  }

  getCategoryByParent(event) {

    this.categoryService
      .getByParent(this.updateProductForm.value.categoryParentId)
      .subscribe(
        data => {
          this.children = data.children;
        },
        error => {
          this.alertService.error(error);
        },
        () => {}
      );
  }
}
