import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlantService } from '../../plants/services/plant.service';
import { MustMatch } from '../../shared/helpers/must-match';
import { FilterBase } from '../../shared/models/pagination';
import { AuthService } from '../../shared/services/auth.service';
import { RolesService } from '../services/roles.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  isLoading= false;
  roles = [];
  rolesSelected = [];
  plants= [];
  createUserForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private rolesService: RolesService,
              private plantService: PlantService,
              private toastrService: ToastrService, 
              private fb: FormBuilder) {
                this.getAllRoles(); 
              }

  ngOnInit() {
     this.createRegisterForm();
     this.getAllPlant();
  }

  createRegisterForm() {
    this.createUserForm = this.fb.group(
        {
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [null,  [Validators.required, Validators.email]],
        confirmEmail: [null],
        phoneNumber: [null],
        password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)] ],
        confirmPassword: [null],
        roles: [ new FormArray([]),Validators.required],
        plantId: [null,  Validators.required]
      },
      {
        validator: [ MustMatch('password', 'confirmPassword')  ]
      }
    );
  }


  create() {
    console.log(this.rolesSelected)

     if (this.createUserForm.invalid) {return; }

     this.authService.register(this.createUserForm.value).subscribe(() => {
        this.toastrService.success('Registration successful');
      }, error => {
        this.toastrService.error(error);
      }, () => {
          this.router.navigate(['/usuarios']);
      });
  }


  private getAllRoles() {
    this.rolesService.getAllRoles().subscribe( data => {
     this.roles = data.roles;
    }, error => {
      this.toastrService.error(error);
    });
  }



  private getAllPlant(){
     const filter  = new FilterBase();
     filter.pageSize = 100;
     this.plantService.getAll(filter).subscribe( data => {
      this.plants = data.entity;
    }, error => {
      this.toastrService.error(error);
    });
  }


}
