import { Component, OnInit } from '@angular/core';
import {ModalKeywordComponent} from './modal-keyword/modal-keyword.component';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})
export class KeywordComponent implements OnInit {

  keywordList = [];
  addKeyword = false;
  newKeyword = '';

  constructor() { }

  ngOnInit() {
    this.getKeyword();
  }

  getKeyword() {
    this.keywordList = [
      {"keyword": "qualcosa"},
      {"keyword": "qualcosa1"},
      {"keyword": "qualcosa2"},
      {"keyword": "qualcosa3"},
      {"keyword": "qualcosa4"},
    ]
  }

  deleteKeyword(key){
    let array = [];
    this.keywordList.forEach(keyword => {
      if(keyword.keyword != key)
        array.push(keyword);
    });
    this.keywordList = array;
  }

  addNewKeyword(){
    console.log( this.keywordList);
    this.keywordList.push({"keyword": this.newKeyword});
    console.log( this.keywordList);
    this.addKeyword = false;
  }

}
