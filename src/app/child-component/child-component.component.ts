import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {

  @Input() input_val: String = 'Default Value';

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

}
