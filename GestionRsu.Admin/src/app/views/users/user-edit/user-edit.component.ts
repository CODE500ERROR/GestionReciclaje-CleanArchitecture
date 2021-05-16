import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { PlantService } from '../../plants/services/plant.service';
import { FilterBase } from '../../shared/models/pagination';
import { RolesService } from '../services/roles.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  editUserForm: FormGroup;
  roles = [];
  rolesSelected = [];
  plants = [];
  isLoading= false;
  constructor(
    private activedRoute: ActivatedRoute,
    private plantService: PlantService,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private rolesSerice: RolesService
  ) {}

  ngOnInit() {
    this.userService.getUserById(this.activedRoute.snapshot.params['id']).subscribe(data => {
      
      this.editUserForm = this.fb.group({
        id: [data.id, Validators.required],
        email: [data.email, [Validators.required, Validators.email]],
        firstName: [data.firstName, Validators.required],
        lastName: [data.lastName, Validators.required],
        phoneNumber: [data.phoneNumber],
        plantId: [data.plantId],
        roles: [data.roles],
      });

    }, error => {

    });

    this.getAllPlant();
    this.getAllRoles();
  }
  update() {
    if (this.editUserForm.invalid) {
      return;
    }
    this.isLoading= true;
    this.userService.update(this.editUserForm.value).subscribe(
      (next) => {
      this.isLoading = false;
      this.toastrService.success('Modified Successfully');
      this.router.navigate(['/usuarios']);

      },
      (error) => {
        this.toastrService.error(error);
        this.isLoading = false;
      },
      () => {}
    );
  }

  private getAllRoles() {
    this.rolesSerice.getAllRoles().subscribe(
      (data) => {
        this.roles = data.roles;
      },
      (error) => {
        this.toastrService.error(error);
      },
      () => {

      }
    );
  }


  private getAllPlant() {
    const filter = new FilterBase();
    filter.pageSize = 100;
    this.plantService.getAll(filter).subscribe(
      (data) => {
        this.plants = data.entity;
      },
      (error) => {
        this.toastrService.error(error);
      }
    );
  }
}
