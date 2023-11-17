import { Booking } from "./Booking";
import { Workshop } from "./Workshop";

export class Specialist{
  id!: number;
  firstName!: String;
  lastname!: String; 
  rating!: number;
  emailSpecialist!: String;
 BookingDemand!: Date;
 rdv!:Date;
  title!:String;
  Cv!: string;
  bio!: string;
Bookings! : Booking;
workshops!:Workshop;
 

}
