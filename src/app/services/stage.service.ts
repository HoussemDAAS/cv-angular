import { Injectable } from '@angular/core';
import { Stage } from '../model/stages.model';
import { Typesdestages } from '../model/typedestages.model';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  stage!: Stage;
  ajouterStage(sta: Stage){
    this.tab_sta.push(sta);
    console.log("Ajout avec succes : "+sta.code);
    }
    supprimerStage(sta: Stage){
      const index = this.tab_sta.indexOf(sta, 0);
      if (index > -1) {
      this.tab_sta.splice(index, 1);
      }
      }
      listeTypesdestages():Typesdestages[] {
        return this.Typesdestages;
        }
      consulterTypesdestages(id:number): Typesdestages{
        return this.Typesdestages.find(tps => tps.codet == id)!;
        }


tab_sta : Stage[];
Typesdestages! : Typesdestages[];


constructor() {
  this.Typesdestages = [
    {codet : 1, Stages : "Stage d'initiation"},
    {codet : 2, Stages : "Stage de Perfectionnement"},
    {codet : 3, Stages : "Stage PFE"}
    ];
    this.tab_sta = [
      {code: 1, typedestages:{codet : 1, Stages : "Stage d'initiation"},lieu : "Rankit web",
       duree : 25, dateDebut : new Date("09/17/2022"), dateFin : new Date("02/12/2022")},
       {code: 2, typedestages:{codet : 1, Stages : "Stage d'initiation"},lieu : "rrrrz",
       duree : 21, dateDebut : new Date("09/17/2022"), dateFin : new Date("02/12/2022")},
      
      
      ];


}
listeStages():Stage[] {
return this.tab_sta;
}
consulterStage(id:number): Stage{
  this.stage = this.tab_sta.find(sta => sta.code == id)!;
  return this.stage;
  }
  modifierStage(sta: Stage) {
  this.supprimerStage(sta);
  this.ajouterStage(sta);

  }
}

