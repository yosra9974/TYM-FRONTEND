import { Client } from "./Client";
import { Specialist } from "./Specialist";

export class Booking {
  id!:number;
  online!:string;
  Book!:Date;
  firstname!:String;
  lastname!:String;
  className!:String;
  Approved!:Boolean;


 // id: number; // Unique identifier for the booking
  title!: string; // Title or description of the booking
  start!: Date; // Start date and time of the booking
  end!: Date; // End date and time of the booking
  // Additional properties that you might need
  Specialist!: Specialist;
  Client!:Client;

}
