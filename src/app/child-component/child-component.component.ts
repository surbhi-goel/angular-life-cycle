import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit, OnChanges {

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

  ngOnInit(): void {
    console.log('ngOnInit called ');
  }

}
