import { Component, OnInit } from '@angular/core';
import { Stage } from '../model/stages.model';
import { Typesdestages } from '../model/typedestages.model';
import { StageService } from '../services/stage.service';
import { TypestageService } from '../services/typestage.service';

@Component({
  selector: 'app-types-de-stages',
  templateUrl: './typesstages.component.html',
  styleUrls: ['./typesstages.component.css']
})
export class TypesDeStagesComponent implements OnInit {
  tab_type: Typesdestages[];
  type!: Typesdestages;
  supptypedeStage(stage: Typesdestages){
    let conf = confirm("Etes-vous sûr de vouloir supprimer ce stage ?");
    if (conf) {
    this.stageService.supprimertype(stage);
    console.log("Suppression avec succes :"+stage.codet);
    }
    }

  constructor(private stageService: TypestageService,) {
    this.tab_type = stageService.listetype();
  }
  ngOnInit(): void {
  }
}