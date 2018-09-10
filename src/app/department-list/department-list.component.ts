import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
//   template: `
//   <h3>
//     Department List
//   </h3>
//   <ul  class="items" >
//     <li *ngFor="let department of departments" [class.selected]="isSelected(department)" (click)="onSelect(department)">
//       <span  class="badge">{{department.id}}</span> {{department.name}}
//     </li>
// </ul>
// `,
  
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSelect(department){
this.router.navigate(['/d',department.id]);
  }

}
