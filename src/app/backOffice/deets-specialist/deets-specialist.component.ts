import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialist } from 'src/app/models/Specialist';
import { SpecialistService } from 'src/app/services/Specialist.service';

@Component({
  selector: 'app-deets-specialist',
  templateUrl: './deets-specialist.component.html',
  styleUrls: ['./deets-specialist.component.css']
})
export class DeetsSpecialistComponent implements OnInit {
  specialist: Specialist= new Specialist();
  email!: string;
  logoData: any;
  etat!:boolean;
  id = this.route.snapshot.paramMap.get('id');
  selectedFile!: File;
  logoUrl!: string;
  userLogoUrl!: string;

  constructor(
    private route: ActivatedRoute,
    private specialistService: SpecialistService,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.specialistService.getById(+id)
      .subscribe(specialist => {
        this.specialist = this.specialist;
      });
  }
  reload() {
    console.log("ok");
    const id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/admin/deets', id]);
  }

  redirectToShow() {
    console.log("ok");
    this.router.navigate(['admin/ShowSpecialist']);
  }

  



  public deleteSpecialist(id: number): void {
    if (confirm('Are you sure you want to delete this specialist?')) {
      this.specialistService.deleteSpecialist(id).subscribe(() => {
        console.log('Speciaist deleted successfully!');
        this.router.navigateByUrl('admin/ShowSpecialist');
      });
    }
  }

 


}

