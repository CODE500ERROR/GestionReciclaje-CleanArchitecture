import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/models/SubCategory';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SubCategoryService } from 'src/app/_services/subCategory.service';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-SubCategory.component.html',
  styleUrls: ['./edit-SubCategory.component.css']
})
export class EditSubCategoryComponent implements OnInit {

  updateSubCategoryForm: FormGroup;
  subCategory: SubCategory ;
  municipios: any[];

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder,
              private alertService: AlertifyService, private subCategoryService: SubCategoryService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.subCategory = (data.SubCategory);
      this.createUpdateForm();
    });
  }

  createUpdateForm() {
    this.updateSubCategoryForm = this.fb.group(
       {
         name: [this.subCategory.name, Validators.required],
         categoryId: [this.subCategory.categoryId, Validators.required]
       }
     );
   }

   updateSubCategory() {
    if (this.updateSubCategoryForm.invalid) { return; }
    this.subCategory = Object.assign({}, this.updateSubCategoryForm.value);
    this.subCategoryService.update(this.subCategory).subscribe(next => {
    }, error => {
      this.alertService.error(error);
    }, () => {
      this.alertService.success('Modificado exitosamente');
    });
  }

  cancel() {
    this.router.navigate(['/subCategory']);
  }
}
