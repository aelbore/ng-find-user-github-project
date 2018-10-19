import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [ './toolbar.component.scss' ],
  encapsulation: ViewEncapsulation.Native
})
export class ToolbarComponent implements OnInit { 

  @Input() header;

  ngOnInit() {
    this.header = 'Github'; 
  }

}