import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { SpecialistService } from 'src/app/services/Specialist.service';

@Component({
  selector: 'app-upload-logo-user',
  templateUrl: './upload-logo-user.component.html',
  styleUrls: ['./upload-logo-user.component.css']
})
export class UploadLogoUserComponent {
  selectedFile!: File;
  logoUrl!: string;
  logoData: any;
  userLogoUrl!: string;
  isLoading: boolean = false;

  constructor(private uploadService: SpecialistService, private route: Router ,private http: HttpClient) {
  }

  onFileSelected(event: Event) {
    const inputElement: HTMLInputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      this.selectedFile = inputElement.files[0];
    } else {
      console.error('No file selected');
    }
  }

  onUpload() {
    this.isLoading = true;
    this.uploadService.uploadCv(this.selectedFile).subscribe(
      res => {
        console.log(res); // Output: "Cv uploaded successfully!"
        this.isLoading = false;
      },
      err => {
        console.log(err);
        this.isLoading = false;
      }
    );
    
  
  }

  redirectToContactUs() {
    console.log("ok");
    this.route.navigate(['user/send-mail']);
  }

}