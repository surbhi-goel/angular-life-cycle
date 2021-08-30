import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {

  input_val: string = '';
  content_val: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(val: any) {
    this.input_val = val.value;
  }

  onContentChange(val: any) {
    this.content_val = val.value;
  }

}
