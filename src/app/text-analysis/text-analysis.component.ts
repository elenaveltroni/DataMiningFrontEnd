import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-analysis',
  templateUrl: './text-analysis.component.html',
  styleUrls: ['./text-analysis.component.css']
})
export class TextAnalysisComponent implements OnInit {
  tab: number = 0;
  text: string = '';
  splitCharacter: string = '';
  urlToSplit = '';

  constructor() { }

  ngOnInit() {
    this.changeTabParam(1);
  }

  changeTabParam(tab: number) {
    this.tab = tab;
  }

  splitByDot(){
    let arraySplit = [];
    arraySplit = this.text.split(".");
    console.log(this.text);
    console.log(arraySplit);
  }

  splitByCharacter(){
    let arraySplit = [];
    arraySplit = this.text.split(this.splitCharacter);
    console.log(this.text);
    console.log(arraySplit);
  }

  getText(){

  }

}
