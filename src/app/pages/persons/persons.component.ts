import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { takeUntil } from 'rxjs';
import { Unsub } from 'src/app/core/Unsub';
import { Person } from '../shared/models/Person';
import { PersonsService } from '../shared/services/persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PersonsComponent extends Unsub implements OnInit,AfterViewInit {

	displayedColumns: string[] = ['name', 'age', 'career', 'hobbie'];	
	persons = new MatTableDataSource<Person>([]);
	@ViewChild(MatPaginator) paginator: MatPaginator;

 
  constructor(private personsService:PersonsService) { 
	super();
   }

  ngOnInit(): void {
	this.loadData();
  }
  ngAfterViewInit() {
    this.persons.paginator = this.paginator;
  }
  loadData(): void {
	this.personsService.persons$
	.pipe(takeUntil(this.unsubscribe$))
	.subscribe( persons => {
		this.persons.data = persons;
	});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.persons.filter = filterValue.trim().toLowerCase();
  }

}
