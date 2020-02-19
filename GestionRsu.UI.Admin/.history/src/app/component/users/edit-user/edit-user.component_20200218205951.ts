import { Component, OnInit, ChangeDetectorRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../shared/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../../shared/helpers/must-match';
import { UserService } from '../../../shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { IdentificationTypeService } from '../../../shared/services/identificationType.service';
import { RoleService } from '../../../shared/services/role.service';
import { Role } from '../../../shared/models/role';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit  {
  roles: Array<Role>;
  user: any;
  userForm: FormGroup;
  identificationTypes: [];
  rolIsEmpty = false;
  constructor(private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef,
    private _rolesService: RoleService,
    private _identificationType: IdentificationTypeService,
    private router: Router) {
    this.getAllIdentificationTypes();
    this. getAllRoles();
   this.activeRoute.data.subscribe(data => {
      this.user = (data.user);
      this.createUserForm();
    },
    error => {
      this.toastr.error(error);
    });

  }

  ngOnInit(): void {
  }
  createUserForm() {
    this.userForm = this.fb.group({
      id: [this.user.id],
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      identificationTypeId: [this.user.identificationTypeId],
      identificationValue: [this.user.identificationValue],
      address: [this.user.address],
      phoneNumber: [this.user.phoneNumber],
      rol: [this.user.rol]
      // password: ['', [Validators.minLength(8), Validators.maxLength(10)] ],
      // confirmPassword: [''],
    },
      // {
      //   validator: [ MustMatch('password', 'confirmPassword') ]
      // }
    );
  }

  get f() { return this.userForm.controls; }

  editUser() {
    if (this.userForm.invalid) {
      return;
    }
    this.user = Object.assign({}, this.userForm.value);
    this.userService.updateUser(this.user).subscribe(data => {
      this.toastr.success('Modificado Existosamente!');
      this.router.navigate(['/usuarios']);
    }, error => {
      this.toastr.error(error);
    });
  }



  // **********SECTION GET DATA *************
  private getAllIdentificationTypes() {
    this._identificationType.getAllClaims().subscribe(data => {
      this.identificationTypes = data;
    });
  }
   
   private getAllRoles() {
    this._rolesService.getAllRoles().subscribe(data => {
      this.roles = data.roles;
    });
  }

}
