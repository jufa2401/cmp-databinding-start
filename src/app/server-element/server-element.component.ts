import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-serverelement',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerelementComponent implements OnInit {
  @Input()element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
