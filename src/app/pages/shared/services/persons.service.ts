import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../models/Person';
import { BackendService } from './backend-service.service';

@Injectable({
  providedIn: 'root', 
})
export class PersonsService {
	
    public persons$: Observable<Person[]>;

  constructor(private backendService:BackendService) { this.loadPersons() }

  loadPersons(): void{
	this.persons$ = this.backendService.getPersons();
  }
}
