import { Injectable } from '@angular/core';
import { Stage } from '../model/stages.model';
import { Typesdestages } from '../model/typedestages.model';

@Injectable({
  providedIn: 'root'
})
export class TypestageService {
  type!: Typesdestages;
  ajoutertype(typ: Typesdestages){
    this.tab_type.push(typ);
    console.log("Ajout avec succes : "+typ.codet);
    }
    supprimertype(typ: Typesdestages){
      const index = this.tab_type.indexOf(typ, 0);
      if (index > -1) {
      this.tab_type.splice(index, 1);
      }
      }
consultertype(id:number): Typesdestages{
  this.type = this.tab_type.find(typ => typ.codet == id)!;
  return this.type;
  }
  modifiertype(typ: Typesdestages) {
  this.supprimertype(typ);
  this.ajoutertype(typ);

  }



tab_type : Typesdestages[];


constructor() {
  this.tab_type = [
    {codet : 1, Stages : "Stage d'initiation"},
    {codet : 2, Stages : "Stage de Perfectionnement"},
    {codet : 3, Stages : "Stage PFE"}
    ];

}
listetype():Typesdestages[] {
return this.tab_type;
}

}

