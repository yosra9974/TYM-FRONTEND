import { Client } from "./Client";
import { Specialist } from "./Specialist";
export class User{
  id!: number;
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;
  address!: string;
  statusUser!: string;
  role!: string;
  cv!: string;
  fidelity!: number;
  code!: number;
  isSubscribed!: boolean;
  Client!: Client;
  specialist!:Specialist;


}

export interface AuthenticationRequest {
  email: string;
  password: string;
}

export interface AuthenticationResponse {
  token: string;
}
