import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from '../model/stages.model';
import { Typesdestages } from '../model/typedestages.model';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-update-stage',
  templateUrl: './update-stage.component.html',
  styleUrls: ['./update-stage.component.css']
})
export class UpdateStageComponent implements OnInit {
  stageCourant = new Stage();
  typesdestages! : Typesdestages[];
  codetModifie! : any;
  constructor(private activatedRoute: ActivatedRoute,
  private router :Router, private stageService: StageService) { }

  modifStage(){
  this.stageCourant.typedestages = this.stageService.consulterTypesdestages(this.codetModifie);
  this.stageService.modifierStage(this.stageCourant);
  this.router.navigate(['stages']);
  }
  ngOnInit(): void {
  this.typesdestages = this.stageService.listeTypesdestages();
  this.stageCourant = this.stageService.consulterStage(this.activatedRoute.snapshot.params['id']);
  this.codetModifie = this.stageCourant.typedestages.codet;
  }
  }
