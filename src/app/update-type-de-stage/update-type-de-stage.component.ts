import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Typesdestages } from '../model/typedestages.model';
import { TypestageService } from '../services/typestage.service';

@Component({
  selector: 'app-update-type-de-stage',
  templateUrl: './update-type-de-stage.component.html',
  styleUrls: ['./update-type-de-stage.component.css']
})
export class UpdateTypeDeStageComponent implements OnInit {
  typeCourant = new Typesdestages();
  typesdestages! : Typesdestages[];
  codetModifie! : any;
  constructor(private activatedRoute: ActivatedRoute,
  private router :Router, private typeService: TypestageService) { }

  modiftypedeStage(){
  this.typeCourant = this.typeService.consultertype(this.codetModifie);
  this.typeService.modifiertype(this.typeCourant);
  this.router.navigate(['types-de-stages']);
  }
  ngOnInit(): void {
  this.typesdestages = this.typeService.listetype();
  this.typeCourant = this.typeService.consultertype(this.activatedRoute.snapshot.params['id']);
  this.codetModifie = this.typeCourant.codet;
  }
  }
