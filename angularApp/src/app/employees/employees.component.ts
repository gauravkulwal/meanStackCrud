import { EmpModel } from './../shared/emp-model';
import { EmpServeService } from './../shared/emp-serve.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



declare var M: any;
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
   Department = ['It operation', 'Developer','Sales','Finance'];
   p: number = 1;
  constructor( public empService: EmpServeService) { }


  ngOnInit() {
    this.resetForm();
    this.refreshEmpList();
  }


  resetForm(form?: NgForm){
    if(form)
    this.resetForm();
    this.empService.selectedEmployee = {
      _id: '',
      name: '',
      location: '',
      department: '',
      gender: 'Male',
    }
  }
  onSubmit(form : NgForm){
    if(form.value._id == ''){
    this.empService.postEmp(form.value).subscribe((res) => {
      this.resetForm(form.value);

      M.toast({html: 'Save Successfuly!', classes: 'rounded'});
      this.refreshEmpList();

    });
  } else{
  this.empService.putEmp(form.value).subscribe((res) => {
    this.resetForm(form);
    M.toast({html: 'Update Successfuly!', classes: 'rounded'});
    this.refreshEmpList();
  })
  }

  }
  refreshEmpList(){
    this.empService.getEmp().subscribe((res) => {
      this.empService.employees = res as EmpModel[];
    })
  }
  onEdit(emp : EmpModel){
    this.empService.selectedEmployee = emp;
  }
  onDelete(_id: string){
    if(confirm("Are you sure want to delete?") == true){
      this.empService.deleteEmp(_id).subscribe((res) => {
        this.refreshEmpList();
        M.toast({html: 'Delete Successfully!', classes: 'rounded'});
      })
    }

  }


}
