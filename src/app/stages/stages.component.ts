import { Component, OnInit } from '@angular/core';
import { Stage,} from '../model/stages.model';
import { StageService } from '../services/stage.service';
@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {
  tab_stage: Stage[];
  stages!: Stage;
  suppStage(stage: Stage){
    let conf = confirm("voulez vous supprimer ce stage ?");
    if (conf) {
    this.stageService.supprimerStage(stage);
    console.log("Suppression avec succes :"+stage.code);
    }
    }

  constructor(private stageService: StageService,) {
    this.tab_stage = stageService.listeStages();
    }
    ngOnInit(): void {
    }
  }
