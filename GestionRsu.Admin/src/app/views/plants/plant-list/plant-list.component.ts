import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ArticlePagination } from '../../shared/models/article-pagination';
import { FilterBase } from '../../shared/models/pagination';
import { ProductService } from '../../products/services/product.service';
import { SortEvent } from '../../shared/directives/sortable.directive';
import { ModalDeleteComponent } from '../../shared/modal-delete/modal-delete.component';
import { PlantService } from '../services/plant.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {

  plants = [];
  filters = new FilterBase();
  modalRef: BsModalRef;
  isLoading = false;
  searchForm: FormGroup;
  bsConfig = Object.assign({}, { containerClass: 'theme-blue' });

  constructor(private plantService: PlantService, private formBuilder: FormBuilder,
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

  openRemoveModal(plantId) {
    const params = Object.assign({}, { class: 'modal-danger modal-md', title: 'Plantas' });
    this.modalRef = this.modalService.show(ModalDeleteComponent, params);
    this.modalRef.content.onClose.subscribe(result => {
      if (result) { this.deletePlant(plantId); }
    });
  }



  //#region private methods

  private createSearchForm() {
    this.searchForm = this.formBuilder.group({
      criteria: [null],
    });
  }

  private deletePlant(plantId) {
    this.plantService.deletePlant(plantId).subscribe(data => {
      this.filters = new FilterBase();
      this.getAll();
    }, error => {
      console.error(error);
    });
  }

  private getAll() {
    this.isLoading = true;
    this.plantService.getAll(this.filters).subscribe(data => {
      this.plants = data.entity;
      this.filters.totalItems = data.filters.totalItems;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.error(error);
    });
  }

  //#endregion

}
