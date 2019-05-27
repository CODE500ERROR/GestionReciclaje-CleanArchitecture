import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SubCategory } from 'src/app/models/SubCategory';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategoryService } from 'src/app/_services/subCategory.service';
import { ModalService } from 'src/app/_services/modal.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { SubCategoryFilter } from 'src/app/models/subCategoryFilter';

@Component({
  selector: 'app-list-subcategory',
  templateUrl: './list-SubCategory.component.html',
  styleUrls: ['./list-SubCategory.component.css']
})
export class ListSubCategoryComponent implements OnInit, AfterViewInit {
  
  filters = new SubCategoryFilter();
  displayedColumns: string[] = [ 'name', 'categoryName', 'actions'];
  public dataSource = new MatTableDataSource<SubCategory>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private route: ActivatedRoute, private router: Router,  private alertify: AlertifyService,
              private subCategoryService: SubCategoryService,  public dialogService: ModalService) { }


  ngOnInit() {
    this.route.data.subscribe(data => {
      this.dataSource.data =  data.subCategories.entity as SubCategory[];
      // this.filters = data.SubCategory.filters;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

 pageChanged(event: any): void {
    this.filters.pageNumber = event.page;
    this.getAll();
  }


  getAll()  {
    this.subCategoryService.getAll(this.filters).subscribe((res) => {
      // this.dataSource.data = res.SubCategory.entity as SubCategory[];
      // this.filters = res.SubCategory.filters;
      console.log(res);
    }, error => {
      this.alertify.error(error);
    });
  }

  createSubCategory() {
    this.router.navigate(['subCategory/create']);
  }

  clearFilters(){

  }

  goToEdit(subCategorySelected: SubCategory) {
    this.router.navigate(['/SubCategory/edit', subCategorySelected.subCategoryId]);
   }

   delete(subCategorySelected): void {
    this.dialogService.openConfirmDialog('Está seguro que desea eliminar esta sub categoría ?')
    .afterClosed().subscribe(res => {
      if (res) {
        this.subCategoryService.delete(subCategorySelected.subCategoryId).subscribe(() => {
          this.getAll();
          this.alertify.success('Eliminado exitosamente !');
        }, error => {
          this.alertify.error(error);
        });
      }
    });
  }
}
