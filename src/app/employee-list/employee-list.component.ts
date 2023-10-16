import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[]=[{
    "id": 1,
    "firstname": "Rahul",
    "lastname": "Bhuse",
    "emailId": "rahulbhuse2001@gmail.com"
},
{
    "id": 2,
    "firstname": "siddant",
    "lastname": "Chavan",
    "emailId": "siddantchavan@gmail.com"
}];

  constructor(private employeeservice:EmployeeService,private router:Router){

  }
  ngOnInit(): void {
    this.getEmployees();
    console.log(this.employees);
   
  }
  private getEmployees(){
    this.employeeservice.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
  

  deleteEmployee(id: number){
    this.employeeservice.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
  

}
