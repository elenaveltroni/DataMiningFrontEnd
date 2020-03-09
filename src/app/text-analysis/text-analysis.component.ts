import { Component, OnInit } from '@angular/core';
import {Service} from '../services/Service';
import {Acquisition} from '../entities/Acquisition';
import {Document} from '../entities/Document';
import {Router} from '@angular/router';
import {Keyword} from '../entities/Keyword';

@Component({
  selector: 'app-text-analysis',
  templateUrl: './text-analysis.component.html',
  styleUrls: ['./text-analysis.component.css']
})
export class TextAnalysisComponent implements OnInit {
  tab: number = 0;
  text: string = '';
  splitCharacter: string = undefined;
  username:string = undefined;
  document: Document = undefined;
  documents: Document[] = [];
  end_date: any;
  start_date:any;
  error = false;
  train: number = 0;
  array_split =  [];

  view_result:boolean = false;

  acquisitions: Acquisition[] = [];

  keywordList : Keyword[] = [];

  constructor(private service: Service, private router: Router) {
    this.getDocument();
  }

  ngOnInit() {
    this.changeTabParam(1);
    this.getKeyword();
  }

  getKeyword() {
    this.service.getAllKeyword().then((data: any) => {
      if (data) {
        this.keywordList = data;
      } else {
        console.log("ERRORE");
      }
    }, err => {
      console.log(err.message);
    });
  }

  changeTabParam(tab: number) {
    this.tab = tab;
  }

  split(){
    this.view_result = true;
    if (this.document == undefined || this.text == '')
      this.error = true;
    console.log(this.document);
    if(this.splitCharacter == undefined) {
      this.array_split = this.text.split(".");
    }
    else{
      this.array_split = this.text.split(this.splitCharacter);
    }
    let array_string = [];
    array_string = this.array_split.filter(i => Math.max(...this.keywordList.map(k=> i.indexOf(k.value))) > 0);
    this.array_split = array_string;
  }

  searchTwitter(){
    this.view_result = true;
    let start = '';
    let end = '';
    if(this.start_date != undefined){
      let start_date = new Date(this.start_date);
      let start_day = start_date.getDate() < 10?'0'+start_date.getDate():start_date.getDate();
      let start_month: number = start_date.getMonth()+1;
      let s_month = start_month < 10 ? '0'+start_month : start_month;
      start = start_date.getFullYear()+'-'+s_month+'-'+start_day;
    }

    if(this.end_date != undefined){
      let end_date = new Date(this.end_date);
      let end_day = end_date.getDate() < 10?'0'+end_date.getDate():end_date.getDate();
      let end_month: number = end_date.getMonth()+1;
      let e_month = end_month < 10 ? '0'+end_month : end_month;
      end = end_date.getFullYear()+'-'+e_month+'-'+end_day;
    }
  }

  getDocument(){
    this.service.getAllAcquisition().then((res: any) => {
      if(res) {
        this.acquisitions = res;
        for(let j = 0; j < this.acquisitions.length; j++){
          for(let i = 0; i < this.acquisitions[j].documents.length; i++){
            this.documents.push(this.acquisitions[j].documents[i]);
          }
        }
      }
    });
  }

  viewTwitter(view: boolean){
    this.view_result = view;
    this.error = false;
  }

}
