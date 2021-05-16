import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../services/category.service';
import { Editor } from 'ngx-editor';
import { DomSanitizer } from '@angular/platform-browser';
import { MimeTypeEnum } from '../../shared/enums/mime-type';

@Component({
  selector: 'app-article-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent implements OnInit {
  articleForm: FormGroup;
  parents = [];
  editor: Editor;
  isLoading = false;
  bsConfig = Object.assign({}, { containerClass: 'theme-blue' });
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.getAllParent();
  }


  ngOnInit() {
  
    this.categoryService.getById(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.articleForm = this.formBuilder.group({
          categoryId: [data.categoryId, Validators.required],
          name: [data.name, Validators.required],
          parentId: [data.parentId],
        });
      },
      (error) => {
        this.toastr.error(error);
      }
    );
  }

  update() {
    if (this.articleForm.invalid) {
      return;
    }
    this.isLoading = true;
    this.categoryService.update(this.articleForm.value).subscribe(
      (data) => {
        this.toastr.success('Modificado Exitosamente');
        this.router.navigate(['categorias']);
      },
      (error) => {
        this.toastr.error(error);
        this.isLoading = false;
      }
    );
  }

  //#region private methods;
  private getAllParent() {
    this.categoryService.getAllParent().subscribe(
      (data) => {
        this.parents = data.parents as unknown [];
      },
      (error) => {
        this.toastr.error(error);
      },
      () => {}
    );
  }
  //#endregion
}
