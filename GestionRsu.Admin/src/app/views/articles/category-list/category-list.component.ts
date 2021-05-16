import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ArticlePagination } from '../../shared/models/article-pagination';
import { FilterBase } from '../../shared/models/pagination';
import { SortEvent } from '../../shared/directives/sortable.directive';
import { ModalDeleteComponent } from '../../shared/modal-delete/modal-delete.component';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  articles = [];
  filters = new ArticlePagination();
  modalRef: BsModalRef;
  isLoading = false;
  searchForm: FormGroup;
  bsConfig = Object.assign({}, { containerClass: 'theme-blue' });

  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder, 
              private modalService: BsModalService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAll();
    this.createSearchForm();
  }

  onSort({ column, direction }: SortEvent) {
    this.filters.SortDir = direction ? direction : null;
    this.filters.Sort = this.filters.SortDir ? column : null;
    this.getAll();
  }
  clearFilters() {
    this.filters = new ArticlePagination();
    this.createSearchForm();
    this.getAll();
  }

  search() {
    this.filters.criteria = this.searchForm.get('criteria').value;
    this.getAll();
  }

  // *********PAGINATIONS
  pageChanged(event: any): void {
    this.filters.page = event.page;
    this.getAll();
  }

  openRemoveModal(quoteId) {
    const params = Object.assign({}, { class: 'modal-danger modal-md', title: 'Category' });
    this.modalRef = this.modalService.show(ModalDeleteComponent, params);
    this.modalRef.content.onClose.subscribe(result => {
      if (result) { this.deleteQuote(quoteId); }
    });
  }



  //#region private methods

  private createSearchForm() {
    this.searchForm = this.formBuilder.group({
      criteria: [null],
      isActive: [null],
      displayFrom: [null],
    });
  }

  private deleteQuote(quoteId) {
    this.categoryService.delete(quoteId).subscribe(data => {
      this.filters = new ArticlePagination();
      this.getAll();
    }, error => {
      console.error(error);
    });
  }

  private getAll() {
    this.isLoading = true;
    this.categoryService.getAll(this.filters).subscribe(data => {
      this.articles = data.entity;
      this.filters.totalItems = data.filters.totalItems;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.error(error);
    });
  }

  //#endregion

}
