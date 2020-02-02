import { Component, OnInit } from '@angular/core';
import {ModalKeywordComponent} from './modal-keyword/modal-keyword.component';
import {Service} from '../services/Service';
import {Keyword} from '../entities/Keyword';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})

export class KeywordComponent implements OnInit {

  keywordList = [];
  addKeyword = false;
  newKeyword = '';

  keyword: Keyword;

  constructor(private service: Service) { }

  ngOnInit() {
    this.getKeyword();
  }

  getKeyword() {
    /*this.keywordList = [
      {"keyword": "qualcosa"},
      {"keyword": "qualcosa1"},
      {"keyword": "qualcosa2"},
      {"keyword": "qualcosa3"},
      {"keyword": "qualcosa4"},
    ]*/
    this.service.getAllKeyword();
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
    this.keyword.value = this.newKeyword;
    this.service.insertKeyword(this.keyword).then((res: any) => {
      if (res.success) {
        console.log(res.data);
      } else {
        console.log("ERRORE");
      }
    }, err => {
      console.log(err.message);
    });

    //this.getKeyword();
    this.addKeyword = false;
  }

}
