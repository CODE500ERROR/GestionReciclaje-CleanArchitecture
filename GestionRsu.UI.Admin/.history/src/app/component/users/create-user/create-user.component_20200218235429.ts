import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from '../../../shared/helpers/must-match';
import { RoleService } from '../../../shared/services/role.service';
import { Role } from '../../../shared/models/role';
import { IdentificationTypeService } from '../../../shared/services/identificationType.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;
  user: User;
  roles: Array<Role>;
  identificationTypes: [];
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private _userService: UserService,
    private _rolesService: RoleService,
    private _identificationType: IdentificationTypeService
  ) {this.getAllRoles(); this.getAllIdentificationTypes(); }

  ngOnInit() {
    this.createcreateUserForm();
  }

  createcreateUserForm() {
    this.createUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',  [Validators.required, Validators.email]],
      identificationTypeId: [''],
      identificationValue: [''],
      phoneNumber: [''],
      address: [''],
      rol: ['', Validators.required]
      // password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)] ],
      // confirmPassword: [''],
    },
    // {
    //   validator: [ MustMatch('password', 'confirmPassword') ]
    // }
    );
  }

  get f() { return this.createUserForm.controls; }

  createUser() {
    if (this.createUserForm.invalid) {
      return;
    }
    this.user = Object.assign({}, this.createUserForm.value);
    // this._userService.create(this.user).subscribe(
    //   data => {
    //     this.toastr.success('Creado Existosamente!');
    //     this.router.navigate(['/usuarios']);
    //   },
    //   error => {
    //     this.toastr.error(error);
    //   }
    // );
  }


  // GET DATA
  private getAllRoles() {
    this._rolesService.getAllRoles().subscribe(data => {
      this.roles = data.roles;
    });
  }

  private getAllIdentificationTypes() {
    this._identificationType.getAllClaims().subscribe(data => {
      this.identificationTypes = data;
    });
  }

}
