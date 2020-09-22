import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyComponent} from './company/company.component';
import { AddcompanyComponent} from './addcompany/addcompany.component';
import {UpdatecompanyComponent} from './updatecompany/updatecompany.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CompanyComponent },
{ path: 'addcompany', component:  AddcompanyComponent},
{path:'updatecompany/:coCode',component:UpdatecompanyComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
