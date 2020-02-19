import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from '../../../shared/services/alertify.service';
import { SeparationService } from '../../../shared/services/separation.service';
import { ModalService } from '../../../shared/services/modal.service';
import { SeparationFilter } from '../../../shared/models/separation-filter';
import { Separation } from '../../../shared/models/separation';

@Component({
  selector: 'app-list-separation',
  templateUrl: './list-separation.component.html',
  styleUrls: ['./list-separation.component.css']
})
export class ListSeparationComponent implements OnInit, AfterViewInit {
  panelOpenState:boolean;
  filters = new SeparationFilter();
  displayedColumns: string[] = [ 'description', 'measuresUnit', 'quantity' , 'productName', 'plantName' , 'actions'];
  public dataSource = new MatTableDataSource<Separation>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private route: ActivatedRoute, private router: Router,  private alertify: AlertifyService,
              private separationService: SeparationService,  public dialogService: ModalService) { }


  ngOnInit() {
    this.route.data.subscribe(data => {
      this.dataSource.data =  data.separations.entity as Separation[];
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
    this.separationService.getAll(this.filters).subscribe((res) => {
       this.dataSource.data = res.entity as Separation[];
    }, error => {
      this.alertify.error(error);
    });
  }


  createSeparation() {
    this.router.navigate(['separaciones/crear']);
  }

  clearFilters() {
    this.filters.name = '';
    this.getAll();
  }

  goToEdit(separationSelected: Separation) {
    this.router.navigate(['/separaciones/editar', separationSelected.separationId]);
   }

   delete(separationSelected): void {
    this.dialogService.openConfirmDialog('Está seguro que desea eliminar esta separación ?')
    .afterClosed().subscribe(res => {
      if (res) {
        this.separationService.delete(separationSelected.separationId).subscribe(() => {
          this.getAll();
          this.alertify.success('Eliminado exitosamente !');
        }, error => {
          this.alertify.error(error);
        });
      }
    });
  }
}
