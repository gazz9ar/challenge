import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { Person } from '../models/Person';

@Injectable({
	providedIn: 'root', 
  })
export class BackendService {
	
	private persons:Person[] = [
		{
			name:'Pedro',
			age:20,
			career:'Ingeniería',
			hobbie:'Futbol'
		},
		{
			name:'Rodrigo',
			age:22,
			career:'Arquitectura',
			hobbie:'Bajo eléctrico'
		},
		{
			name:'Romina',
			age:21,
			career:'Abogacia',
			hobbie:'Acrobacia'
		},
		{
			name:'Ana',
			age:23,
			career:'Contadora',
			hobbie:'Astronomía'
		}		
	]
  constructor() { }

  getPersons(): Observable<Person[]> {
	return of(this.persons);
  }

  addPerson(person:Person): boolean {
	const prevLength:number = this.persons.length;	
	this.persons.push(person);
	if (this.persons.length > prevLength) {
		return true;
	}		
	return false;
  }
}
