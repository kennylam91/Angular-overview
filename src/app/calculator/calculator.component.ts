import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstOperand: number;
  secondOperand: number;
  result: number;
  operator: string;

  calculate(): void {
    switch (this.operator) {
      case '+': {
        this.result = this.firstOperand + this.secondOperand;
        break;
      }
      case '-': {
        this.result = this.firstOperand - this.secondOperand;
        break;
      }
      case '*': {
        this.result = this.firstOperand * this.secondOperand;
        break;
      }
      case '/': {
        this.result = this.firstOperand / this.secondOperand;
        break;
      }

    }
  }

  onInputChange(input) {
    this.firstOperand = input.value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
