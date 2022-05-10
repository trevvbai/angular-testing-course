import {CalculatorService} from "./calculator.service";
import {LoggerService} from "./logger.service";
import {TestBed} from "@angular/core/testing";

describe('CalculatorService', () => {

  let calculator: CalculatorService;
  let loggerSpy : any;

  beforeEach(()=>{
    console.log("calling beforeEach")
    loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy }
      ]
    })

    calculator = TestBed.inject(CalculatorService);

  })

  it('add two numbers', () => {
    console.log("add test");
    const result = calculator.add(2,2);
    expect(result).toBe(4)
  })

  it('subtract two numbers', () => {
    console.log('subtract test');
    const result = calculator.subtract(2,2);
    expect(result).toBe(0, "unexpected subtraction result");  })
})
