import { Component, OnInit } from '@angular/core';
import {Service} from '../services/Service';
import {Keyword} from '../entities/Keyword';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})

export class KeywordComponent implements OnInit {

  keywordList: Keyword[] = [];
  addKeyword = false;
  newKeyword = '';

  key: Keyword;

  insertSuccess = false;
  insertError = false;

  constructor(private service: Service) { }

  ngOnInit() {
    this.getKeyword();
    this.key = new Keyword();
  }

  getKeyword() {
    this.service.getAllKeyword().then((data: any) => {
      if (data) {
        console.log(data);
        this.keywordList = data;
      } else {
        console.log("ERRORE");
      }
    }, err => {
      console.log(err.message);
    });
  }

  deleteKeyword(key){
    let array: Keyword[] = [];
    this.keywordList.forEach(keyword => {
      if(keyword.value != key)
        array.push(keyword);
    });
    this.keywordList = array;
    this.keywordList = this.keywordList.map(o => {delete o['_id']; return o; } );
    this.inserKeyword();
  }

  inserKeyword(){
    this.service.insertKeyword(this.keywordList).then((res: any) => {
      if (res) {
        console.log(res);
        this.insertSuccess = true;
        this.getKeyword();
      } else {
        this.insertError = true;
      }
    }).catch(error => {
      this.insertError = true;
    });
  }

  addNewKeyword(){
    this.key.value = this.newKeyword;
    this.key.type = 'web';
    this.keywordList.push(this.key);
    this.keywordList = this.keywordList.map(o => {delete o['_id']; return o; } );
    this.inserKeyword();
    this.addKeyword = false;
    this.newKeyword = '';
  }

}
