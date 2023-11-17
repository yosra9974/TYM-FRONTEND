import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";
import {Router} from "@angular/router";
import { SpecialistService } from 'src/app/services/Specialist.service';
import { Specialist } from 'src/app/models/Specialist';


@Component({
  selector: 'app-show2-admin',
  templateUrl: './show2-admin.component.html',
  styleUrls: ['./show2-admin.component.css']
})
export class Show2AdminComponent implements OnInit{
  users: User[] = [];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;
  role!:string;
  specialists!: Specialist[]
 
  specialist: Specialist = new Specialist();
  constructor(private specialistService : SpecialistService,private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    console.log("ngOnInit: getUsers()");
    this.getUsers();
    this.specialistService.getAllSpecialists().subscribe((data: Specialist[]) => {
      console.log(data);
      this.specialists = data; // initialisation de la variable boutiques avec les données du service
    });;
  }

  onUserClick(id: number) {
    this.router.navigate(['/admin/details', id]);
  }

  getUsers() {
    const spec = encodeURIComponent(this.spec);
    const sort = encodeURIComponent(this.sort);
    console.log("getUsers: spec =", spec, "sort =", sort);
    this.userService.getUsers(spec, sort).subscribe(response => {
      console.log("getUsers: response =", response);
      this.users = response;
    });
  }

  onSpecChange() {
    this.sort = 'id,asc'; // réinitialisation du tri par défaut
    this.pageNumber = 0; // réinitialisation du numéro de page
    this.getUsers();
  }

  onSortChange(sort: string) {
    this.sort = sort;
    this.getUsers();
  }

  onPageChange(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getUsers();
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.users.length / this.pageSize);
    return Array.from(Array(pageCount), (_, i) => i);
  }

  get itemsToDisplay(): any[] {
    const startIndex = this.pageNumber * this.pageSize;
    return this.users.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange2(page: number): void {
    this.pageNumber = page;
  }
  getAllSpecialists(): void {
    this.specialistService.getAllSpecialists()
      .subscribe(specialists => this.specialists=this.specialists);
  }
  
}
