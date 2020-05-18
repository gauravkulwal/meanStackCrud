import { EmpModel } from './emp-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpServeService {
selectedEmployee: EmpModel;
employees: EmpModel[];
readonly baseUrl = 'http://localhost:3000/employees';
  constructor( private http: HttpClient) { }

  getEmp(){
    return this.http.get(this.baseUrl);

  }
  postEmp(emp: EmpModel){
    return this.http.post(this.baseUrl , emp);
  }
  putEmp(emp : EmpModel){
    return this.http.put(this.baseUrl + `/${emp._id}`, emp);
  }
  deleteEmp(_id: string){
return this.http.delete(this.baseUrl + `/${_id}`);
  }


}
