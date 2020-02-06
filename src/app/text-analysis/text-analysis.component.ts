import { Component, OnInit } from '@angular/core';
import {Service} from '../services/Service';
import {Acquisition} from '../entities/Acquisition';
import {Document} from '../entities/Document';
import {Router} from '@angular/router';

@Component({
  selector: 'app-text-analysis',
  templateUrl: './text-analysis.component.html',
  styleUrls: ['./text-analysis.component.css']
})
export class TextAnalysisComponent implements OnInit {
  tab: number = 0;
  text: string = '';
  splitCharacter: string = undefined;
  username = '';
  document: any = undefined; //???
  documents: Document[] = [];
  end_date: any;
  start_date:any;
  error = false;

  view_twitter:boolean = false;

  acquisitions: Acquisition[] = [];

  constructor(private service: Service, private router: Router) { }

  ngOnInit() {
    this.changeTabParam(1);
    this.getDocument();
  }

  changeTabParam(tab: number) {
    this.tab = tab;
  }

  splitByDot(){
    if(this.document == undefined || this.text == '')
      this.error = true;
    else {
      let arraySplit = [];
      arraySplit = this.text.split(".");
      console.log(this.text);
      console.log(arraySplit);
    }
  }

  splitByCharacter(){
    if(this.document == undefined || this.splitCharacter == undefined || this.text == '')
      this.error = true;
    else {
      let arraySplit = [];
      arraySplit = this.text.split(this.splitCharacter);
      console.log(this.text);
      console.log(arraySplit);
    }
  }

  searchTwitter(){
    this.view_twitter = true;
    let start_date = new Date(this.start_date);
    let start_day = start_date.getDate() < 10?'0'+start_date.getDate():start_date.getDate();
    let start_month: number = start_date.getMonth()+1;
    let s_month = start_month < 10 ? '0'+start_month : start_month;
    let start = start_date.getFullYear()+'-'+s_month+'-'+start_day;

    if(this.end_date == undefined)
      this.end_date = new Date();

    let end_date = new Date(this.end_date);
    let end_day = end_date.getDate() < 10?'0'+end_date.getDate():end_date.getDate();
    let end_month: number = end_date.getMonth()+1;
    let e_month = end_month < 10 ? '0'+end_month : end_month;
    let end = end_date.getFullYear()+'-'+e_month+'-'+end_day;
    console.log(end_month);
    console.log(start_month);

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
    this.view_twitter = view;
  }

}
