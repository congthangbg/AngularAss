import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { Employee } from '../../models/employee';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  employee: Employee;
  btnDisable = false;
  url = 'http://localhost:3030/v1/api/accounts';
  constructor(private rest: RestApiService, private data: DataService) {
    this.employee = new Employee();
  }

  ngOnInit() {}

  validate() {
    return true;
  }

  save() {
    this.btnDisable = true;
    if (this.validate()) {
      this.rest
        .post(this.url, this.employee)
        .then((data) => {
          this.data.success('Employee is saved');
          this.btnDisable = false;
        })
        .catch((err) => {
          this.data.error(err['message']);
          this.btnDisable = false;
        });
    }
  }
}
