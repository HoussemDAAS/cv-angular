import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stage } from '../model/stages.model';
import { Typesdestages } from '../model/typedestages.model';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-add-stage',
  templateUrl: './addstage.component.html',
  styleUrls: ['./addstage.component.css']
})
export class AddStageComponent implements OnInit {
  newStage = new Stage();
  typesdestages! : Typesdestages[];
  newCodet! : number;
  newnomStages! : Typesdestages;
  constructor(private router :Router, private stageService: StageService )
  { }
  addStage(){
  this.newnomStages = this.stageService.consulterTypesdestages(this.newCodet);
  this.newStage.typedestages = this.newnomStages;
  this.stageService.ajouterStage(this.newStage);
  console.log(this.newStage);
  this.router.navigate(['stages']);
  }
  ngOnInit(): void {
  this.typesdestages = this.stageService.listeTypesdestages();
  }
  }
