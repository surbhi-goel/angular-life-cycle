import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {

  input_val: string = '';
  content_val: string = '';
  is_child_view: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(val: any) {
    this.input_val = val.value;
  }

  onContentChange(val: any) {
    this.content_val = val.value;
  }

  toggleChildComponent() {
    this.is_child_view = !this.is_child_view;
  }

}
