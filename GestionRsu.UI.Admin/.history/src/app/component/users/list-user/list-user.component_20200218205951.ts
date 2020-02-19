import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { User } from '../../../shared/models/user';
import { UserFilter } from '../../../shared/models/UserFilters';
import { UserService } from '../../../shared/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModalConfirmComponent } from '../../../shared/helpers/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  
  filters = new UserFilter();

  /****ATRIBUTOS PAGINADO-TABLE***/
  users: MatTableDataSource<User>;
  displayedColumns: string[] = ['email', 'firstname', 'lastname', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /****ATRIBUTOS PAGINADO-TABLE***/


  constructor(private _userService: UserService, private activeRoute: ActivatedRoute, public dialog: MatDialog, 
    private _toastService: ToastrService) { }

  ngOnInit() {
    this.activeRoute.data.subscribe(data => {
      this.users = new MatTableDataSource<User>(data.users.entity);
      this.filters.totalRecords = data.users.filters.totalRecords;
    },
      error => {

      });
  }


  getAllUsers() {
    this._userService.getAllUsers(this.filters).subscribe(data => {
      this.users = new MatTableDataSource<User>(data.entity);
      this.filters.totalRecords = data.filters.totalRecords;
    });
  }

  applyFilter(criteria) {
  }

  pageChanged(event: any): void {
    this.filters.pageNumber = event.pageIndex + 1;
    this.filters.pageSize = event.pageSize;
    this.getAllUsers();
  }


  deleteUser(userSelected: User ) {
    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      width: '30%',
      data: { message: 'Esta seguro que desea eliminar el usuario ' + userSelected.email + '?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._userService.deleteUser(userSelected.id).subscribe(data => {
          this._toastService.success('Eliminado exitosamente');
          this.getAllUsers();
        });
      }
    });
  }

}
