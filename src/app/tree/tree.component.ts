import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  _dataSource:any[];

  @Input('dataSource') 
  set dataSource (value){
    console.log(value)
    this._dataSource = value;
  };

  get dataSource() {
    return this._dataSource;
  };

  constructor() { 
  }

  ngOnInit() {
  }

}
