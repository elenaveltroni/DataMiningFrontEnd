import { Component, OnInit } from '@angular/core';
import {Service} from '../services/Service';
import {Document} from '../entities/Document';
import {Acquisition} from '../entities/Acquisition';
import {Router} from '@angular/router';

@Component({
  selector: 'app-train-process',
  templateUrl: './train-process.component.html',
  styleUrls: ['./train-process.component.css']
})
export class TrainProcessComponent implements OnInit {
  tab: number = 0;
  text: string = '';
  splitCharacter: string = undefined;
  username = '';
  document: any = undefined;
  documents: Document[] = [];
  end_date: any;
  start_date:any;
  error = false;

  array_split = [];

  view:boolean = false;
  view_phrases:boolean = false;
  view_twitter:boolean = false;

  acquisitions: Acquisition[] = [];

  constructor(private service: Service, private router: Router) {
    this.getDocument();
  }

  ngOnInit() {
    this.changeTabParam(1);
  }

  changeTabParam(tab: number) {
    this.tab = tab;
  }

  splitByDot(){
    this.error = false;
    if(this.text == '')
      this.error = true;
    else {
      this.view = true;
      this.view_phrases = true;
      this.view_twitter = false;
      this.array_split = [];
      this.array_split = this.text.split(".");
      console.log(this.text);
      console.log(this.array_split);
    }
  }

  splitByCharacter(){
    this.error = false;
    if(this.splitCharacter == undefined || this.text == '')
      this.error = true;
    else {
      this.view = true;
      this.view_phrases = true;
      this.view_twitter = false;
      this.array_split = [];
      this.array_split = this.text.split(this.splitCharacter);
      console.log(this.text);
      console.log(this.array_split);
    }
  }

  searchTwitter(){
    this.error = false;
    this.view = true;
    this.view_twitter = true;
    this.view_phrases = false;
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
    this.view = view;
  }

  viewPhrases(view: boolean){
    this.view = false;
  }
}
