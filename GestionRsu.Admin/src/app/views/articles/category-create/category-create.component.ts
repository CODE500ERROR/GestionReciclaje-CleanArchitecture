import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../services/category.service';
import { Editor } from 'ngx-editor';
import { MimeTypeEnum } from '../../shared/enums/mime-type';



@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {
  articleForm: FormGroup;
  isLoading = false;
  parents = [];
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.getAllParent();
  }

  ngOnInit() {
    this.createForm();
  }


  create() {

    if (this.articleForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.categoryService.create(this.articleForm.value).subscribe(
      (data) => {
        this.toastr.success('Guardado Exitosamente');
        this.router.navigate(['categorias']);
      },
      (error) => {
        this.toastr.error(error);
        this.isLoading = false;
      }
    );
  }


  //#region private methods


  private createForm() {
    this.articleForm = this.formBuilder.group({
      name: [null, Validators.required],
      parentId : [null],
    });
  }


  private getAllParent() {
    this.categoryService.getAllParent().subscribe(data => {
      this.parents = data.parents as unknown as [];
   }, error => {
     this.toastr.error(error);
   }, () => {
   });
  }

  //#endregion
}
