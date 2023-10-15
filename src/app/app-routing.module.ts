import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfosComponent } from './infos/infos.component';
import { CompetencesComponent } from "./competences/competences.component";
import { DiplomesComponent } from "./diplomes/diplomes.component";
import { ExperienceComponent } from "./experience/experience.component";
import { AdministrationComponent } from "./administration/administration.component";
import { AddStageComponent } from './addstage/addstage.component';
import { StagesComponent } from './stages/stages.component';
import { AddTypeDeStageComponent } from './addtypestage/addtypestage.component';
import { TypesDeStagesComponent} from './typesstages/typesstages.component';
import { UpdateStageComponent } from './update-stage/update-stage.component';
import { UpdateTypeDeStageComponent } from './update-type-de-stage/update-type-de-stage.component';
import { ConnectComponent } from './connect/connect.component';
const routes: Routes = [
  {path: "infos", component : InfosComponent},
  {path:"competences", component : CompetencesComponent},
  {path: "diplomes", component : DiplomesComponent},
  {path: "experience", component : ExperienceComponent},
  {path:"administration",component:AdministrationComponent},
  {path:"Addstage",component:AddStageComponent},
  {path:"stages",component:StagesComponent},
  {path:"addtypestage",component:AddTypeDeStageComponent},
  {path:"typesstage",component:TypesDeStagesComponent},
  {path: "updateStage/:id", component : UpdateStageComponent},
  {path: "updatetypedeStage/:id", component : UpdateTypeDeStageComponent},
  {path: "connect", component : ConnectComponent},
{path: "", redirectTo: "infos", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
