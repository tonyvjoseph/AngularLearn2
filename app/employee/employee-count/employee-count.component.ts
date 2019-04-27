import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  all;

  @Input()
  male;

  @Input()
  female;

  // Output property example
  
}
