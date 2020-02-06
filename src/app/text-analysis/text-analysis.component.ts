import { Component, OnInit } from '@angular/core';
import {Service} from '../services/Service';
import {Acquisition} from '../entities/Acquisition';
import {Document} from '../entities/Document';

@Component({
  selector: 'app-text-analysis',
  templateUrl: './text-analysis.component.html',
  styleUrls: ['./text-analysis.component.css']
})
export class TextAnalysisComponent implements OnInit {
  tab: number = 0;
  text: string = '';
  splitCharacter: string = undefined;
  twitter = '';
  document: any = undefined; //???
  documents: Document[] = [];
  end_date: any;
  start_date:any;
  error = false;

  acquisitions: Acquisition[] = [];

  constructor(public service: Service) { }

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
    console.log(this.start_date);
    console.log(this.end_date);
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

}
