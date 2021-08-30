import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit, OnChanges,
  DoCheck {

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

}
