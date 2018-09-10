import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';

const routes: Routes = [
  {path:'',redirectTo:'/d',pathMatch:'full'},//prefix
  {path:'d',component:DepartmentListComponent},
 // {path:'d/:id',component:DepartmentDetailComponent},
 {path:'d/:id',
 component:DepartmentDetailComponent,
 children:[
   {path:'overview',component:DepartmentOverviewComponent}
 ]
},
  {path:'e',component:EmployeeListComponent},
  {path:'**', component:PageNotFoundComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
