import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Typesdestages } from '../model/typedestages.model';
import { TypestageService } from '../services/typestage.service';

@Component({
  selector: 'app-addtypestage',
  templateUrl: './addtypestage.component.html',
  styleUrls: ['./addtypestage.component.css']
})
export class AddTypeDeStageComponent implements OnInit {
  newtype = new Typesdestages();
  type! : Typesdestages[];
  newCodet! : number;
  newnomStages! : Typesdestages;
  constructor(private router :Router, private typeService: TypestageService )
  { }
  addtype(){

  this.typeService.ajoutertype(this.newtype);
  console.log(this.newtype);
  this.router.navigate(['types-de-stages']);
  }
  ngOnInit(): void {
  this.type = this.typeService.listetype();
  }
  }
