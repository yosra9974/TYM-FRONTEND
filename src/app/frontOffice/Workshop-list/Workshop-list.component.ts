import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {WebSocketServiceService} from "../../services/web-socket-service.service";
import {WorkshopServiceService} from "../../services/workshop-service.service";
import { Workshop } from 'src/app/models/Workshop';
import { ClientService } from 'src/app/services/Client.Service';
import { Client } from 'src/app/models/Client';




@Component({
  selector: 'app-Workshop-list',
  templateUrl: './Workshop-list.component.html',
  styleUrls: ['./Workshop-list.component.css']
})

export class WorkshopListComponent implements OnInit {
// boutiques: Boutique[] = [];

selectedClient2:any;
clients!:Client[];

currentUser:any
workshops!: Workshop []


workshop: Workshop = new Workshop();
isUpdate:boolean=false;
searchValue: string = ''; // Add this line recherche

notification!: string ; // Ajout de la variable pour stocker la notification



constructor (private webSocketService: WebSocketServiceService 
  ,private workshopService: WorkshopServiceService,
  private router: Router,private clientService: ClientService) {  }
showModal = false;


ngOnInit() {
  this.workshopService.getWorkshops().subscribe((data: Workshop[]) => {
    console.log(data);
    this.workshops = data;
  });
  this.getworkshops();
  

  this.webSocketService.getMessage().subscribe(message => {
    this.notification = message.messageContent; // Mise à jour de la variable notification avec le message de la notification
  });








  this.closePopupForUpdate()
  this.closePopupForCreate()


  //this.getBoutiques();
}
  getAllClients() {
    this.clientService.getAllClients().subscribe((data: any[]) => {
      this.clients = data;
    });
    
  }
  





openPopupForCreate() {
  this.isUpdate=false
  this.showModal = true;

}


  onSubmit() {
    let emailUser = localStorage.getItem("emailUser");
    const selectedClient2 = this.selectedClient2.email;

    this.workshopService.addWorkshopAndAssignCLIENT(this.workshop,this.selectedClient2,emailUser)
      .subscribe(workshop => {
        console.log('workshop ajoutée avec succès: ', workshop );

        debugger

        this.workshop = new Workshop();
        this.getworkshops();
        this.notification = "Une nouvelle workshop a été ajoutée ou modifiée";
        setTimeout(() => {
          this.notification = '';
        }, 6000);


        this.webSocketService.sendMessage("Tannoura");
        this.webSocketService.getMessage().subscribe(message => console.log(message));

        console.log(this.webSocketService.sendMessage("tnnnoua"))
        console.log(this.webSocketService.getMessage())

      }, error => {
        console.error('Erreur  : ', error);
        if (error.status === 500) {
          alert("Veuillez Vérifier que tous les champs sont vrais");
        }
      });

    this.showModal = false;
  }
openPopupForUpdate(workshoptoupdate:any) {
  this.workshops=workshoptoupdate
  this.showModal = true;
  this.isUpdate=true;

}

closePopupForCreate() {
  this.showModal = false;
}

closePopupForUpdate() {
  this.showModal = false;
}



getworkshops(): void {
  this.workshopService.getWorkshops()
    .subscribe(workshop => this.workshops= workshop);
    
  //location.reload();
}

public deleteWorkshop(id: number) {
  console.log(id);
  if (confirm('Are you sure you want to delete this workshop?')) {
    this.workshopService.deleteWorkshop(id).subscribe(() => {
      console.log('workshop deleted successfully!');
      this.getworkshops();
    });
  }
}
openAddWorkshopModal() {
  this.isUpdate=false
  this.router.navigate(['/workshop/add']);
}


searchByAddress(address: string): void {

  if(address==''){
    return   this.getworkshops()
  }

  else {
    this.workshopService.searchworkshops(address)
      .subscribe(workshops => this.workshops = workshops);
  }}

sortBoutiques(): void {
  this.workshopService.sortWorkshops()
    .subscribe(workshops => this.workshops = workshops);
}


}
