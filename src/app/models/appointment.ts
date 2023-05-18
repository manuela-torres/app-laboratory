import { IdAffiliate } from "./idAffiliates";
import { IdTest } from "./idTest";

export class Appointment{
  id:number;
  date:string;
  hora: string;
  idTest:IdTest;
  idAffiliate:IdAffiliate;

}
