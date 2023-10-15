import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfosComponent } from './infos/infos.component';
import { CompetencesComponent } from './competences/competences.component';
import { DiplomesComponent } from './diplomes/diplomes.component';
import { ExperienceComponent } from './experience/experience.component';
import { AdministrationComponent } from './administration/administration.component';
import { AddStageComponent } from './addstage/addstage.component';
import { StagesComponent } from './stages/stages.component';
import { AddTypeDeStageComponent } from './addtypestage/addtypestage.component';
import { TypesDeStagesComponent } from './typesstages/typesstages.component';
import { UpdateStageComponent } from './update-stage/update-stage.component';
import { UpdateTypeDeStageComponent } from './update-type-de-stage/update-type-de-stage.component';
import { ConnectComponent } from './connect/connect.component';
@NgModule({
  declarations: [
    AppComponent,
    InfosComponent,
    CompetencesComponent,
    DiplomesComponent,
    ExperienceComponent,
    AdministrationComponent,
    AddStageComponent,
    StagesComponent,
    AddTypeDeStageComponent,
    TypesDeStagesComponent,
    UpdateStageComponent,
    UpdateTypeDeStageComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
