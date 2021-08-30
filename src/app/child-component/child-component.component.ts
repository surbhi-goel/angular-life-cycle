import { OnDestroy } from '@angular/core';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  @Input() input_val: String = 'Default Value';
  timer_interval: any;

  // constructor first called in the life-cycle
  constructor() {
    console.log('constructor called ');
  }

  // ngOnChanges called after constructor
  // ngOnChanges called whenever there is any change in 'Input' property
  /**
   * test this function by changing input_val value
   * from the parent component
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called ', changes);
  }

  // ngOnInit called after ngOnChanges
  ngOnInit(): void {
    console.log('ngOnInit called ');
  }

  // ngDoCheck called after ngOnInit
  // ngDoCheck called whenever ngOnChanges called
  // ngDoCheck called whenever there is any change in component
  /**
   * try to change the Input value and check console
   * try to click on button
   */
  ngDoCheck() {
    console.log('ngDoCheck called ');
  }

  btnClick() {
    console.log('btnClick');
  }

  // ngAfterContentInit called after ngDoCheck
  ngAfterContentInit() {
    console.log('ngAfterContentInit called ');
  }

  // ngAfterContentChecked called after ngAfterContentInit
  // ngAfterContentChecked called if there is any change in ng-content
  // after any change, called after doCheck
  /**
   * try to change the Content value and check console
   */
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called ');
  }

  // ngAfterViewInit called after ngAfterContentChecked
  // call only one time
  ngAfterViewInit() {
    console.log('ngAfterViewInit called ');
  }

  // ngAfterViewChecked called after ngAfterViewInit
  // call multi-times if there is any change 
  // call after ngAfterContentChecked for any change
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called ');
  }

  // ngOnDestroy called when component destroy
  /**
   * used to terminate any timeout, interval function
   * on component destroy
   * try to click on toggle button and check console
   */
  ngOnDestroy() {
    console.log('ngOnDestroy called ');
    clearInterval(this.timer_interval);
    //comment above line and see the difference
  }

  startTimer() {
    let timer = 1;
    this.timer_interval = setInterval(() => {
      console.log("timer " + timer++);
    }, 1000);
  }

}
