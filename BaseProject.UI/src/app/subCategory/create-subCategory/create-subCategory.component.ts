import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/models/subCategory';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';
import { SubCategoryService } from 'src/app/_services/subCategory.service';

@Component({
  selector: 'app-create-subcategory',
  templateUrl: './create-subCategory.component.html',
  styleUrls: ['./create-subCategory.component.css']
})
export class CreateSubCategoryComponent implements OnInit {
  subCategoryRegister: SubCategory;
  createSubCategoryForm: FormGroup;
  municipios: any[];

    constructor(private subCategoryService: SubCategoryService,
                private router: Router,
                private alertService: AlertifyService, private fb: FormBuilder) {}

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.createSubCategoryForm = this.fb.group(
        {
          name: ['', Validators.required],
          categoryId: ['', Validators.required],
        }
    );
  }

  get f() { return this.createSubCategoryForm.controls; }

  save() {
    if (this.createSubCategoryForm.invalid) {return; }

    this.subCategoryRegister = Object.assign({}, this.createSubCategoryForm.value);

    this.subCategoryService.create(this.subCategoryRegister).subscribe(() => {
       this.alertService.success('Creado Exitosamente');
     }, error => {
       this.alertService.error(error);
     }, () => {
         this.router.navigate(['/subCategory']);
     });
 }

 cancel() {
   this.router.navigate(['/subCategory']);
 }

}
