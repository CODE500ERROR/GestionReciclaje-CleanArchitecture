import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FilterBase } from '../../shared/models/pagination';
import { SeparationService } from '../../../services/separation.service';
import { SortEvent } from '../../shared/directives/sortable.directive';
import { ModalDeleteComponent } from '../../shared/modal-delete/modal-delete.component';

@Component({
  selector: 'app-separation-list',
  templateUrl: './separation-list.component.html',
  styleUrls: ['./separation-list.component.scss']
})
export class SeparationListComponent implements OnInit {
  separations = [];
  filters = new FilterBase();
  modalRef: BsModalRef;
  isLoading = false;
  searchForm: FormGroup;

  constructor(private separationService: SeparationService, private formBuilder: FormBuilder, 
              private modalService: BsModalService) { }

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
    this.filters = new FilterBase();
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

  openRemoveModal(separationId) {
    const params = Object.assign({}, { class: 'modal-danger modal-md', title: 'Separaciones' });
    this.modalRef = this.modalService.show(ModalDeleteComponent, params);
    this.modalRef.content.onClose.subscribe(result => {
      if (result) { this.delete(separationId); }
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

  private delete(quoteId) {
    this.separationService.delete(quoteId).subscribe(data => {
      this.filters = new FilterBase();
      this.getAll();
    }, error => {
      console.error(error);
    });
  }

  private getAll() {
    this.isLoading = true;
    this.separationService.getAll(this.filters).subscribe(data => {
      this.separations = data.entity;
      this.filters.totalItems = data.filters.totalItems;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.error(error);
    });
  }

  //#endregion

}
