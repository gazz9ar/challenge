import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { BackendService } from '../shared/services/backend-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-persons',
  templateUrl: './manage-persons.component.html',
  styleUrls: ['./manage-persons.component.scss']
})
export class ManagePersonsComponent implements OnInit {

	personForm = new FormGroup({
		name: new FormControl('',Validators.required),
		age: new FormControl('',[Validators.required,Validators.max(120)]),
		career: new FormControl(''),
		hobbie: new FormControl('',Validators.required),
	  });

	  get name() { return this.personForm.get('name'); }
	  get age() { return this.personForm.get('age'); }
	  get career() { return this.personForm.get('career'); }
	  get hobbie() { return this.personForm.get('hobbie'); }

	 
  constructor(private backendService:BackendService,
	private router:Router) { }

  ngOnInit(): void {	
	
  }

  onSubmit() {
	// TODO: Use EventEmitter with form value
	if(this.backendService.addPerson(this.personForm.value)) {
		Swal.fire(
			'Exito!',
			`Se ha añadido a ${this.name.value} a la lista de personas`,
			'success'
		  )
		  .then(
			()=>{
				this.router.navigate(['personas/home'])
			}			
		  )
	}
  }

}
