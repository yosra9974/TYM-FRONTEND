import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeCv } from 'src/app/models/DemandeCv';
import { Specialist } from 'src/app/models/Specialist';
import { SpecialistService } from 'src/app/services/Specialist.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show-specialist',
  templateUrl: './show-specialist.component.html',
  styleUrls: ['./show-specialist.component.css']
})
export class ShowSpecialistComponent {
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;
  role!:string;
  specialists!: Specialist[]
  cv!:DemandeCv []

  specialist: Specialist = new Specialist();
  constructor(private specialistService : SpecialistService,private router: Router, private UserService : UserService) { }

  ngOnInit(): void {
   
    console.log("ngOnInit: getSpecialists()");
    this.getAllSpecialists();
  }

  onUserClick(id: number) {
    this.router.navigate(['/admin/deets', id]);
  }

  getAllSpecialists() {
    const spec = encodeURIComponent(this.spec);
      const sort = encodeURIComponent(this.sort);
      console.log("getSpecialists: spec =", spec, "sort =", sort);
      this.specialistService.getAllSpecialists().subscribe(response => {
        console.log(response);
        this.specialists = response;
      });
  
  }

  onSpecChange() {
    this.sort = 'id,asc'; // réinitialisation du tri par défaut
    this.pageNumber = 0; // réinitialisation du numéro de page
    this.getAllSpecialists();
  }

  onSortChange(sort: string) {
    this.sort = sort;
    this.getAllSpecialists();
  }

  onPageChange(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getAllSpecialists();
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.specialists.length / this.pageSize);
    return Array.from(Array(pageCount), (_, i) => i);
  }

  get itemsToDisplay(): any[] {
    const startIndex = this.pageNumber * this.pageSize;
    return this.specialists.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange2(page: number): void {
    this.pageNumber = page;
  }
 
  public deleteSpecialist(id: number) {
    console.log(id);
    if (confirm('Are you sure you want to delete this Specialist ?')) {
      this.specialistService.deleteSpecialist(id).subscribe(() => {
        console.log('workshop deleted successfully!');
        this.getAllSpecialists();
      });
    }
  }
}

