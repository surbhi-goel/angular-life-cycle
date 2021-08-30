import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  // constructor first called in the life-cycle
  constructor() {
    console.log('constructor called ');
  }

  ngOnInit(): void {
    console.log('ngOnInit called ');
  }

}
